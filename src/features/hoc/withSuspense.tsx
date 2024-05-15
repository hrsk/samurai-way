import { ComponentType, Suspense } from 'react';

import { Preloader } from '../Preloader';

type ConnectedPropsType = ReturnType<typeof Object>

interface TProps extends ConnectedPropsType { }

export const withSuspense = <T extends TProps>(Component: ComponentType<T>) => {
    return (props: TProps) => (
        <Suspense fallback={<Preloader />}>
            <Component {...props as T} />
        </Suspense>
    );
}
