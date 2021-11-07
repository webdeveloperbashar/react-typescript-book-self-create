/* eslint-disable no-undef */
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/solid';
import { IDataState } from 'types';
import { ChangeEvent, useState } from 'react';
import Button from '../components/Button/Button';
import Modal from '../components/Form/Modal';

const Home = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<IDataState>({} as IDataState);
  const [data, setData] = useState<IDataState[]>([]);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setValue({
      ...value,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const handleTodoCreate = (): void => {
    setData([...data, value]);
  };
  let today: any = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  const current: any = data.map((item) => item.deadline);
  return (
    <>
      <Modal
        modalOpen={open}
        modalSetOpen={setOpen}
        handleTodoCreate={handleTodoCreate}
        handleChange={handleChange}
      />
      <div
        className=" w-3/4 m-auto py-12 px-2 sm:px-6 lg:px-8 flex items-center justify-center"
        style={{ height: '100vh' }}
      >
        <div
          style={{ backgroundColor: '#E3E9FF', height: '650px' }}
          className="sm:max-w-lg sm:w-96 space-y-8 rounded-3xl shadow-xl p-4 relative"
        >
          <div>
            <h2 className="divide-y divide-light-blue-400 mt-4 text-start text-2xl font-extrabold text-gray-900">
              Todo List
            </h2>
          </div>

          <div style={{height: '497px'}} className="overflow-x-hidden overscroll-y-auto">
            {data.length > 0 ? (
              data.map((item, index) => (
                <div
                  className="p-2 shadow-lg rounded-lg bg-white flex items-center justify-between"
                  style={{ marginTop: '10px', padding: '10px 10px' }}
                  key={index + 1}
                >
                  <div className="flex items-start">
                    <input
                      id={item.todo}
                      name="remember-me"
                      type="checkbox"
                      value={item.todo}
                      className="h-4 w-4 mt-2 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <div className="ml-4">
                      <label
                        htmlFor="remember-me"
                        className="block text-sm text-gray-900"
                      >
                        <h2 className="text-lg font-bold">{item.todo}</h2>
                      </label>
                      <div className="text-purple-500 text-sm">
                        <p>{item.projectType}</p>
                      </div>
                      <div className="text-gray-500 text-sm">
                        {today === current[0] ? (
                          <p>Today</p>
                        ) : (
                          <p>{item.deadline}</p>
                        )}
                      </div>
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
              ))
            ) : (
              <div className="flex items-center justify-center h-3/6">
                <p>No Todo Found</p>
              </div>
            )}
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
