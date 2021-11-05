import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Form/Input';
import Modal from '../components/Form/Modal';
const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal modalOpen={open} modalSetOpen={setOpen} />
      <div
        className=" w-3/4 m-auto py-12 px-2 sm:px-6 lg:px-8 flex items-center justify-center"
        style={{ height: '100vh' }}
      >
        <div
          style={{ backgroundColor: '#E3E9FF', height: '650px' }}
          className="max-w-md w-full space-y-8 rounded-3xl shadow-xl p-4 relative"
        >
          <div>
            <h2 className="mt-4 text-start text-2xl font-extrabold text-gray-900">
              Today
            </h2>
          </div>
          <form action="#" method="POST">
            <div className="rounded-md flex bg-white justify-between align-middle">
              <Input
                type="text"
                name="todo"
                className="appearance-none relative shadow-lg block w-full py-3 px-2 border-none placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                autoComplete="off"
                required={true}
                placeholder="Add new todo"
              />
            </div>
          </form>
          <div
            className="p-2 shadow-lg rounded-lg bg-white flex items-center justify-between"
            style={{ marginTop: '10px', padding: '10px 10px' }}
          >
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              
              <div>
              <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                <h3>Praying</h3>
                </label>
              </div>
            </div>
            <div className="flex justify-between align-middle">
              <span className="mr-2 cursor-pointer">
                <TrashIcon className="w-6 text-red-500" />
              </span>
              <span className="cursor-pointer">
                <PencilIcon className="w-6 text-green-500" />
              </span>
            </div>
          </div>
          <div className="absolute bottom-4 right-4">
            <Button
              className="inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-500 focus:outline-none focus:ring-offset-2  sm:ml-3 sm:w-auto sm:text-sm"
              modalSetOpen={setOpen}
              innerValue={<PlusIcon className="w-6 text-white font-bold" />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
