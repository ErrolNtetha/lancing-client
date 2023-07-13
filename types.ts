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
}
