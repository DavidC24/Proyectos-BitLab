import React from 'react';
import UsersDisplay from './components/UsersDisplay'
import UsersMaker from './components/UsersMaker'
import UsersDeleter from './components/UsersDeleter';
import TodosDisplay from './components/TodosDisplay';
import TodosMaker from './components/TodosMaker';
import TodosDeleter from './components/TodosDeleter';

function App() {
  return (
    <div className='bg-red-900'>
      <h1 className='text-4xl text-white font-bold text-center tracking-wide py-4'>LISTA DE USUARIOS</h1>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-2/3'>
          <div className='text-center p-4'>
            <div className='border-4 rounded-lg border-red-600 bg-white mb-4'>
            <div className='flex flex-col'>
              <div className='text-2xl border-b-4 border-red-600 font-semibold py-2'>Usuarios
              </div>
              <div className='flex flex-row'>
                <UsersDisplay/>
                <TodosDisplay/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-1/3'>
        <div className='flex flex-col mb-4'>
          <div className='text-center p-4'>
            <div className='border-4 rounded-lg border-red-600 bg-white px-4 pb-4'>
              <div className='text-2xl font-semibold py-2'>Nuevo usuario / eliminar usuario
              </div>
              <UsersMaker/>
              <UsersDeleter/>     
            </div>
          </div>
          <div className='text-center p-4'>
            <div className='border-4 rounded-lg border-red-600 bg-white px-4 pb-4'>
              <div className='text-2xl font-semibold py-2'>Nueva tarea / eliminar tarea
              </div>
              <TodosMaker/>
              <TodosDeleter/>     
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
