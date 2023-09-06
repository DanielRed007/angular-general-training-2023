
export interface Request{
    name: string;
    lastname: string;
    akkadianId: string;
    passportNumber: string;
    planetOrigin: string;
    origin: string;
    destination: string;
    roundTrip: boolean;
    departureDate: any;
    returnDate?: any;
}

export interface PersonalInfo{
    name: string;
    lastname: string;
    akkadianId: string;
    passportNumber: string;
    planetOrigin: string;
}

export interface DestinationInfo{
    origin: string,
    destination: string,
    roundTrip: string,
    departureDate: string,
    returnDate: string
}