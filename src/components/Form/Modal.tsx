import { ChangeEvent, Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Input from './Input';
import Dropdown from '../DropDown/Dropdown';
import { IState } from '../../Pages/Home';

type Iprops = {
  modalOpen: boolean;
  modalSetOpen: (Boolean: boolean) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleTodoCreate: () => void;
  selected: IState;
  setSelected: (dispatch: IState) => void;
};

const Modal = ({
  modalOpen,
  modalSetOpen,
  handleChange,
  handleTodoCreate,
  selected,
  setSelected
}: Iprops) => {
  const cancelButtonRef = useRef(null);
  const handleCreate = (): void => {
    modalSetOpen(false);
    handleTodoCreate();
  };
  return (
    <>
      <Transition.Root show={modalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={modalSetOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-96">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <form action="#" method="POST">
                    <div className="rounded-md bg-white text-gray-500">
                      <Input
                        label="Add Todo"
                        type="text"
                        name="todo"
                        onChange={handleChange}
                        className="appearance-none mt-2 relative border-2 block w-full py-3 px-2 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        autoComplete="off"
                        required={true}
                        placeholder="Todo Name..."
                      />
                    </div>
                    <div className="rounded-md bg-white mt-10">
                      <label htmlFor="project" className="text-gray-500">
                        Project Type
                      </label>
                      <Dropdown selected={selected} setSelected={setSelected} />
                    </div>
                    <div className="rounded-md bg-white text-gray-500 mt-10">
                      <Input
                        label="Deadline"
                        type="date"
                        name="deadline"
                        onChange={handleChange}
                        className="appearance-none mt-2 relative border-2 block w-full py-3 px-2 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        autoComplete="off"
                        required={true}
                        placeholder="Todo Name..."
                      />
                    </div>
                  </form>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-500 focus:outline-none  sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={handleCreate}
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => modalSetOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Modal;
