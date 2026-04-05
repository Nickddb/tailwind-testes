
import { Button } from './Components/button';
function App(){

  return (
      <>
        <h1 className='text-primary bg-dark-background font-graphik-bold'>Hello, World!</h1>
        <div>
          <div className="w-full flex gap-3 items-center flex-col lg:flex-row justify-center">
            <div className="bg-blue-700 w-32 h-32 md:w-64 md:h-64 xs:bg-green-400"></div>
            <div className="bg-blue-700 w-32 h-32 md:w-64 md:h-64 xl:bg-red-600"></div>
            <div className="bg-blue-700 w-32 h-32 md:w-64 md:h-64"></div>
          </div>
        </div>

        <h1 className='text-dark-background'>Hello world</h1> 
        <div className="bg-dark-background">
          <Button>Primary Background</Button>
          <Button variant='secondary'>Secondary Background</Button>
          <Button isBold={true}>Bold Text with Primary Background</Button>
          <Button isBold={true} variant='secondary'>Bold Text with Secondary Background</Button>
        </div>
      </>
    )
}

export default App
