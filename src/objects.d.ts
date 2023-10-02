interface Paginated<T>{
    data: T[];
    links: any;
    meta: {
        current_page: number;
        from: number;
        last_page: number;
        path: string;
        per_page: number;
        to: number;
        total: number;
    }
}

interface CommonUserAttributes {
    id: string;
    avatar: string;
    photos: UserImageType[];
    location: UserLocation;
}

interface UserType extends CommonUserAttributes {
    description?: UserCharacteristics["description"];
    first_name: string;
    last_name: string;
    email: string;
}