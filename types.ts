export interface InputProps {
    placeholder: string;
    id?: string;
    name: string;
    type?: string;
    hasHideIcon?: boolean;
    isHidden?: boolean;
    handleHideIcon?: React.MouseEventHandler<HTMLSpanElement>;
    required: boolean;
    inputHasValue?: boolean | undefined;
    register: Function;
    disabled?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export type DateProps = {
    id?: string;
    name: string;
    required: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
}

/* Vendor properties */

export type VendorProps = {
    names: {
        firstName: string;
        lastName: string;
    },
    avatar: string;
    service: string;
    rating: number;
    description: string;
    id: string;
    approved: {
        isApproved: boolean;
        approvedDate: null | Date;
    },
    banned: {
        isBanned: boolean;
        startDate: null | Date;
        endDate: null | Date;
        reason: null | string;
    }
    reviews: {
        firstName: string;
        lastName: string;
        comment: string;
    }[];
    packages: {
        price: number;
        contract: string;
        type: string;
        description: string;
        discount: {
            isActive: boolean;
            startDate: null | Date;
            endDate: null | Date;
            percentOff: number | null;
        }
    }[];
};

