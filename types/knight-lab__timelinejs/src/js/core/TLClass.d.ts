export function TLClass(): void;
export namespace TLClass {
    function extend(props: any): {
        (...args: any[]): void;
        prototype: any;
        superclass: any;
        extend: (props: any) => any;
        include(props: any): void;
    };
}
