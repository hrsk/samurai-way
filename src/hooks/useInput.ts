import { ChangeEvent, useCallback, useState } from 'react';

export const useInput = (initialValue: string) => {
    const [value, setValue] = useState<string>(initialValue);

    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
        [],
    );
    const clearValue = useCallback(() => setValue(initialValue), [initialValue]);

    return { value, onChange, clearValue };
};
