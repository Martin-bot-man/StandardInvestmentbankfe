export interface MembershipOption {
  highlight: string;
  label: string;
  description: string;
}

export interface SignUpFormData {
  fullName: string;
  email: string;
  phone: string;
  membership: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  membership?: string;
}