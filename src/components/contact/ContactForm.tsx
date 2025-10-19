import React, { useState } from 'react';
import { useIntersectionObserver } from '@/hooks';

interface ContactFormProps {
  className?: string;
}

type FormState = 'default' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

const projectTypes = [
  'Kitchen Remodel',
  'Custom Built-ins',
  'Staircase Work',
  'Furniture Piece',
  'Other Custom Work',
];

export const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, freezeOnceVisible: true });
  const [formState, setFormState] = useState<FormState>('default');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormState('loading');

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // In a real app, you would send the data to your API here
      console.log('Form submitted:', formData);
      
      setFormState('success');
      setFormData({
        name: '',
        email: '',
        projectType: '',
        message: '',
      });

      // Reset success state after 5 seconds
      setTimeout(() => {
        setFormState('default');
      }, 5000);
    } catch (error) {
      setFormState('error');
      setTimeout(() => {
        setFormState('default');
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className={`py-20 bg-white ${className}`}>
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div
            ref={ref}
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-h1 font-serif text-iron-900 mb-4">
              Request a Quote
            </h2>
            <p className="text-lg text-iron-600 max-w-2xl mx-auto">
              Tell me about your project and I&apos;ll get back to you within one business day.
            </p>
          </div>

          {/* Contact Info */}
          <div
            className={`grid md:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center p-6 bg-oak-50 rounded-lg">
              <div className="w-12 h-12 bg-brass-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="font-semibold text-iron-900">Phone</div>
              <a href="tel:5551234567" className="text-brass-600 hover:text-brass-700 transition-colors">
                (555) 123-4567
              </a>
            </div>

            <div className="text-center p-6 bg-oak-50 rounded-lg">
              <div className="w-12 h-12 bg-brass-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="font-semibold text-iron-900">Email</div>
              <a href="mailto:josh@oakiron.com" className="text-brass-600 hover:text-brass-700 transition-colors">
                josh@oakiron.com
              </a>
            </div>

            <div className="text-center p-6 bg-oak-50 rounded-lg">
              <div className="w-12 h-12 bg-brass-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="font-semibold text-iron-900">Hours</div>
              <div className="text-iron-600 text-sm">Mon-Fri: 8am-5pm</div>
            </div>
          </div>

          {/* Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {formState === 'success' ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-green-900 mb-2">
                  Request Received!
                </h3>
                <p className="text-green-700">
                  Thank you for reaching out. We&apos;ll reply within one business day.
                </p>
              </div>
            ) : formState === 'error' ? (
              <div className="bg-red-50 border-2 border-red-500 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-red-900 mb-2">
                  Something Went Wrong
                </h3>
                <p className="text-red-700 mb-4">
                  Please try again or contact us directly at (555) 123-4567
                </p>
                <button
                  onClick={() => setFormState('default')}
                  className="btn btn-secondary"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-iron-900 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md border-2 transition-colors ${
                      errors.name
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-oak-300 focus:border-brass-500'
                    } focus:outline-none`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-iron-900 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md border-2 transition-colors ${
                      errors.email
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-oak-300 focus:border-brass-500'
                    } focus:outline-none`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Project Type Field */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-iron-900 mb-2">
                    Project Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md border-2 transition-colors ${
                      errors.projectType
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-oak-300 focus:border-brass-500'
                    } focus:outline-none bg-white`}
                  >
                    <option value="">Select a project type...</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p className="mt-1 text-sm text-red-600">{errors.projectType}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-iron-900 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border-2 border-oak-300 focus:border-brass-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className={`btn btn-primary w-full py-4 text-lg font-semibold ${
                    formState === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {formState === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Request'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

