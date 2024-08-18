'use client';
import CP from '@/ui/CP';
import { useEffect, useState } from 'react';

const code = `
import { useState } from 'react';

const Modal = () => {
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        if (openModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
        return () => document.body.style.overflow = 'auto';
    }, [openModal]);

return (
    <div className="w-72 mx-auto flex items-center justify-center">
        {/* Pay Button */}
        <button onClick={() => setOpenModal(true)} className="bg-black text-white p-2 rounded-lg">Pay Now</button>
        <div className={\`fixed flex justify-center items-center z-[100] \${openModal ? 'visible opacity-1' : 'invisible opacity-0'} duration-300 inset-0 w-full h-full\`}>
            <div onClick={(e_) => e_.stopPropagation()} className={\`absolute overflow-x-hidden overflow-y-scroll w-full h-full flex justify-center bg-white drop-shadow-2xl rounded-lg \${openModal ? 'translate-y-0 opacity-1 duration-300' : 'translate-y-32 opacity-0 duration-100'}\`}>
                <main className="px-4 sm:px-6 lg:px-8 py-8">
                    <button onClick={() => {setOpenModal(false)}} className="mr-0 mx-auto flex bg-slate-950 text-white px-3 py-2 rounded-lg mb-6">Close</button>
                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="space-y-8 lg:mb-6">
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                                <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
                                    <h3 className="text-2xl font-semibold whitespace-nowrap">Shipping Details</h3>
                                </div>
                                <div className="lg:p-6 p-2">
                                    {/* Shipping Details form */}
                                    <form className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Name</label>
                                            <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter your name" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Address</label>
                                            <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter your address" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">City</label>
                                            <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter your city" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Country</label>
                                            <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter your country" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="rounded-lg border bg-card  shadow-sm ">
                                <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
                                    <h3 className="text-2xl font-semibold whitespace-nowrap">Payment Information</h3>
                                </div>
                                <div className="lg:p-6 p-2">
                                    {/* Personal Information details form */}
                                    <form className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none">Card Number</label>
                                            <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter your card number" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none">Expiry Date</label>
                                                <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="MM/YY" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none">CVV</label>
                                                <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter your CVV" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none">Billing Address</label>
                                            <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter your billing address" />
                                        </div>
                                    </form>
                                </div>
                        </div>
                                <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
                                    <h3 className="text-2xl font-semibold whitespace-nowrap">Order Summary</h3>
                                </div>
                                {/* Checkout form */}
                                <div className="lg:p-6 p-2">
                                    <div className="space-y-4">
                                        <div className="flex justify-between"><span>Product 1</span><span>$99.99</span></div>
                                        <div className="flex justify-between"><span>Product 2</span><span>$49.99</span></div>
                                        <div className="flex justify-between"><span>Product 3</span><span>$29.99</span></div>
                                        <div className="border-t border-gray-200  mt-4 pt-4 flex justify-between font-semibold"><span>Total</span><span>$179.97</span></div>
                                    </div>
                                </div>
                                <div className="flex items-center lg:p-6 p-2">
                                    <button onClick={() => {setOpenModal(false)}} className="ring-offset-background focus-visible:ring-ring inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-zinc-600 px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-white dark:text-black">Complete Purchase</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
  );
};

export default Modal;
`;

const Modal6 = () => {
    const [openModal, setOpenModal] = useState(false);
    // Effect to handle body overflow
    useEffect(() => {
        // Disable body scrollbar when the modal is open
        if (openModal) {
            document.body.style.overflow = 'hidden';
        } else {
            // Restore body scrollbar when the modal is closed
            document.body.style.overflowY = 'auto';
        }
        // Cleanup function to restore body scrollbar on component unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [openModal]);
    return (
        <CP code={code}>
            <div className="mx-auto flex w-72 items-center justify-center">
                {/* Pay Button */}
                <button onClick={() => setOpenModal(true)} className="rounded-md bg-black px-5 py-2 text-white dark:bg-white dark:text-black">
                    Pay Now
                </button>
                {/* purchase modal */}
                <div className={`fixed z-[100] ${openModal ? 'visible' : 'invisible'} inset-0`}>
                    <div
                        onClick={(e_) => e_.stopPropagation()}
                        className={`absolute flex h-full w-full justify-center overflow-x-hidden overflow-y-scroll rounded-lg bg-white drop-shadow-2xl dark:bg-[#111] ${
                            openModal ? 'opacity-1 translate-y-0 duration-300' : 'translate-y-32 opacity-0'
                        }`}
                    >
                        <main className="px-4 py-8 sm:px-6 lg:px-8">
                            <button
                                onClick={() => {
                                    setOpenModal(false);
                                }}
                                className="mx-auto mb-6 mr-0 flex rounded-lg bg-slate-950 px-3 py-2 text-white dark:bg-white dark:text-black"
                            >
                                Close
                            </button>
                            <div className="grid gap-8 lg:grid-cols-2">
                                <div className="space-y-8 lg:mb-6">
                                    <div className="bg-card text-card-foreground rounded-lg border shadow-sm">
                                        <div className="flex flex-col space-y-1.5 p-2 lg:p-6">
                                            <h3 className="whitespace-nowrap text-2xl font-semibold">Shipping Details</h3>
                                        </div>
                                        <div className="p-2 lg:p-6">
                                            {/* Shipping Details form */}
                                            <form className="space-y-4">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Name</label>
                                                    <input className="flex h-10 w-full rounded-md border bg-transparent px-3" placeholder="Enter your name" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Address</label>
                                                    <input className="flex h-10 w-full rounded-md border bg-transparent px-3" placeholder="Enter your address" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">City</label>
                                                    <input className="flex h-10 w-full rounded-md border bg-transparent px-3" placeholder="Enter your city" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Country</label>
                                                    <input className="flex h-10 w-full rounded-md border bg-transparent px-3" placeholder="Enter your country" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="bg-card rounded-lg border shadow-sm">
                                        <div className="flex flex-col space-y-1.5 p-2 lg:p-6">
                                            <h3 className="whitespace-nowrap text-2xl font-semibold">Payment Information</h3>
                                        </div>
                                        <div className="p-2 lg:p-6">
                                            {/* Personal Information details form */}
                                            <form className="space-y-4">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium leading-none">Card Number</label>
                                                    <input className="flex h-10 w-full rounded-md border bg-transparent px-3" placeholder="Enter your card number" />
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium leading-none">Expiry Date</label>
                                                        <input className="flex h-10 w-full rounded-md border bg-transparent px-3" placeholder="MM/YY" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium leading-none">CVV</label>
                                                        <input className="flex h-10 w-full rounded-md border bg-transparent px-3" placeholder="Enter your CVV" />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium leading-none">Billing Address</label>
                                                    <input className="flex h-10 w-full rounded-md border bg-transparent px-3" placeholder="Enter your billing address" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6 space-y-8 lg:mb-0">
                                    <div className="bg-card text-card-foreground rounded-lg border shadow-sm">
                                        <div className="flex flex-col space-y-1.5 p-2 lg:p-6">
                                            <h3 className="whitespace-nowrap text-2xl font-semibold">Order Summary</h3>
                                        </div>
                                        {/* Checkout form */}
                                        <div className="p-2 lg:p-6">
                                            <div className="space-y-4">
                                                <div className="flex justify-between">
                                                    <span>Product 1</span>
                                                    <span>$99.99</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Product 2</span>
                                                    <span>$49.99</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Product 3</span>
                                                    <span>$29.99</span>
                                                </div>
                                                <div className="mt-4 flex justify-between border-t border-gray-200 pt-4 font-semibold">
                                                    <span>Total</span>
                                                    <span>$179.97</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center p-2 lg:p-6">
                                            <button
                                                onClick={() => {
                                                    setOpenModal(false);
                                                }}
                                                className="ring-offset-background focus-visible:ring-ring inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-zinc-600 px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-white dark:text-black"
                                            >
                                                Complete Purchase
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </CP>
    );
};

export default Modal6;
