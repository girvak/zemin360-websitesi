import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
}

export function FormField({ label, htmlFor, required, hint, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="z-form-label">
        {label}
        {required && <span className="text-zemin-orange ml-0.5">*</span>}
      </label>
      {hint && <p className="text-xs text-gray-500 mb-2 leading-relaxed">{hint}</p>}
      {children}
    </div>
  );
}

export function FormInput({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`z-input ${className}`} {...props} />;
}

export function FormTextarea({ className = "", ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={`z-input resize-none ${className}`} {...props} />;
}

export function FormSelect({ className = "", ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={`z-input bg-white ${className}`} {...props} />;
}
