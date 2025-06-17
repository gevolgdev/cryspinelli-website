import React from "react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name: string;
    mask?: any;
    leftIcon?: React.ReactNode;
    maxLength?: number;
    errorMessage?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
    label,
    name,
    onChange,
    mask,
    leftIcon,
    maxLength,
    errorMessage,
    ...restInputProps
}: IInputProps) {
    const [value, setValue] = React.useState(restInputProps.value);
    return (
        <div className="flex w-full flex-col">
            {label ? (
                <label
                    htmlFor={name}
                    className="text-sm text-[var(--color-light-purple)]"
                >
                    {label}
                </label>
            ) : null}
            <div
                className={`flex items-center gap-2 border-b-1 ${
                    errorMessage
                        ? "border-red-500"
                        : "border-[var(--color-light-purple)]"
                } p-2`}
            >
                {leftIcon ? leftIcon : null}
                <input
                    {...restInputProps}
                    name={name}
                    maxLength={maxLength}
                    value={
                        mask ? mask(restInputProps.value) : restInputProps.value
                    }
                    onChange={(e) => {
                        setValue(e.target.value);
                        onChange && onChange(e);
                    }}
                    className="w-full bg-transparent text-[var(--color-light-purple)] focus:outline-none"
                />
                {maxLength ? (
                    <span className="ml-auto text-sm text-[var(--color-light-purple)] opacity-40">
                        {value?.toString().length ?? 0}/{maxLength}
                    </span>
                ) : null}
            </div>
            {errorMessage ? (
                <p className="text-sm text-red-500">{errorMessage}</p>
            ) : null}
        </div>
    );
}

export { Input };
