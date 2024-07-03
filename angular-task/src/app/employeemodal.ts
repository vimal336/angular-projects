
export interface Employee {
    id: number;
    fullName: string;
    email: string;
    gender: string;
    role: string;
    employmentStatus: string;
    dateofjoin: string;
    address: {
      city: string;
      street: string;
      pincode: number;
    };
  }
  
