import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';

interface ToastState {
    visible: boolean;
    text: string;
    toastError: boolean;
}
interface SetToastProps {
    text: string;
    toastError: boolean;
}

interface ToastContextData {
    visible: boolean;
    text: string | undefined;
    toastError: boolean;
    showToast(): Promise<void>;
    closeToast(): Promise<void>;
    setToast(text: string, toastError?: boolean): Promise<void>;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<ToastState>({
        visible: false,
        text: '',
        toastError: false,
    } as ToastState);

    useEffect(() => {
        async function loadStoragedData(): Promise<void> {}
        loadStoragedData();
    }, []);

    const showToast = useCallback(async () => {
        setData(prevState => {
            return { ...prevState, visible: true };
        });
    }, []);
    const closeToast = useCallback(async () => {
        setData(prevState => {
            return { ...prevState, visible: false };
        });
    }, []);
    const setToast = useCallback(async (text: string, error: boolean) => {
        setData(prevState => {
            return {
                ...prevState,
                text,
                toastError: error,
            };
        });
    }, []);
    return (
        <ToastContext.Provider
            value={{
                visible: data.visible,
                text: data.text,
                toastError: data.toastError,
                showToast,
                closeToast,
                setToast,
            }}
        >
            {children}
        </ToastContext.Provider>
    );
};

function useToast(): ToastContextData {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error('useToast must be used within an ToastProvider');
    }

    return context;
}

export { ToastProvider, useToast };
