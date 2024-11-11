

const Allplayers = ({isButtonActive,ButtonActive,ChoosePlayer}) => {
console.log(ChoosePlayer)
    return (
        <div className="mt-20">
            <div className="flex justify-between">
                {
                    ButtonActive ? <h1 className="text-2xl font-bold">Available Players</h1> : 
                    <h1 className="text-2xl font-bold">Selected Player {`(${ChoosePlayer}/6)`}</h1>
                }
               
            <div className="md:flex text-right ">
          <div className="mb-3">
          <button  onClick={() => isButtonActive(true)}className={ButtonActive ? 'active rounded ' : 'normal shadow-lg rounded' }>Available</button>
          </div>
          <div>
         <button onClick={() => isButtonActive(false)}    className={ButtonActive ? 'normal shadow-lg rounded2' : 'active rounded2 '}>{`(${ChoosePlayer})`} Selected </button>
         </div>
               
            </div>
            </div>
        </div>
    );
};

export default Allplayers;