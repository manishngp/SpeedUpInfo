import {  motion } from 'motion/react'
import './App.css'

function App() {


  return (
    <div style={{boxSizing:"border-box"}}>
      {/* < motion.div
        style={{ height: "200px", width: "200px", border: "1px solid black", backgroundColor: "grey"}}
        animate={{ x: "500px", rotate: 720 }}
        transition={{ duration: 2, delay: 0.5 , repeat:Infinity }}
      >

      </motion.div>
      <motion.div
        style={{ height: "200px", width: "200px", border: "1px solid black", backgroundColor: "yellow" }}
        animate={{ rotate: 1000 }}
        transition={{ duration: 2,  repeat:Infinity , ease:"linear" }}
      >

      </motion.div>
      < motion.div
        style={{ height: "200px", width: "200px", border: "1px solid black", backgroundColor: "grey"}}
        animate={{ x: "-500px", rotate: 720 }}
        transition={{ duration: 2, delay: 0.5, repeat:Infinity  }}
      >

      </motion.div>   */}
      <motion.div
              style={{ height: "200px", width: "200px", border: "1px solid black", backgroundColor: "green"}}
              drag

      >

        </motion.div>    

    </div>
  )
}

export default App
