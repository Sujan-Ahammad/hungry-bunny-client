import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'



const ManageAction = ({userData}) => {
console.log(userData);
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }


    const handleMakeAdmin=()=>{
        
    }
    const handleMakeRestaurant=()=>{

    }
    const handleRemoveUser=()=>{

    }



    return (
        <div>

            <Menu as="div" className="relative inline-block text-left">


                <button className=' relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                    <Menu.Button className="items-center flex relative font-bold px-4  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Action

                    </Menu.Button>
                </button>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                    onClick={() => handleMakeAdmin()}

                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        Make Admin
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                    onClick={handleMakeRestaurant}

                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        Make Restaurant
                                    </button>
                                )}
                            </Menu.Item>
                            {/* <Menu.Item>
                                {({ active }) => (
                                    <button
                                        
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        License
                                    </button>
                                )}
                            </Menu.Item> */}
                            <div >
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                        onClick={handleRemoveUser}

                                        // type="submit"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block w-full px-4 py-2 text-left text-sm'
                                            )}
                                        >
                                            Remove Permanent
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>


        </div>
    );
};

export default ManageAction;