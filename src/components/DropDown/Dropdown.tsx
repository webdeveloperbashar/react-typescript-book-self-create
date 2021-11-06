/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

const people = [
  {
    id: 1,
    name: 'Home',
    avatar:
      'https://media.gettyimages.com/photos/house-orange-isolated-home-simple-picture-id1273742730',
  },
  {
    id: 2,
    name: 'Personal',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROPzc1fJ5tqedpl8z80RlXK9vP2a0PULoeNg&usqp=CAU',
  },
  {
    id: 3,
    name: 'LMS',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB1S1lcjT-FINwhQj_5EhN0iAnJEX0RDYsIA&usqp=CAU',
  },
  {
    id: 4,
    name: 'Office',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Bgpt9JZZuR5uOoSYKEMDt_U6h-qigPk8TA&usqp=CAU',
  },
  {
    id: 5,
    name: 'Development',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2Z1j1Rv19rRWIBfe1SCbN7O1qaag1YYJoA&usqp=CAU',
  },
  {
    id: 6,
    name: 'Programming',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDokuXblcLv7T9J7LnxynN6S6MPxBrtRScpg&usqp=CAU',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
interface IState {
    id: number,
    name: string,
    avatar: string,
}
interface IProps {
    selected: IState,
    setSelected: (dispatch: IState) => void
}
const Dropdown = ({selected, setSelected}: IProps) => {
//   const [selected, setSelected] = useState<IState>(people[3]);
//     console.log(setSelected)

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="flex items-center">
                <img
                  src={selected.avatar}
                  alt=""
                  className="flex-shrink-0 h-6 w-6 rounded-full"
                />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={person.avatar}
                            alt=""
                            className="flex-shrink-0 h-6 w-6 rounded-full"
                          />
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate'
                            )}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};
export default Dropdown;
