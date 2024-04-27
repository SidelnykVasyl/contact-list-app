export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string
  dateOfBirth?: Date;
  email?: string;
  address?: string;
}
