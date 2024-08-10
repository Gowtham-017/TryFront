import './Settings.css'
import {FaToolbox} from 'react-icons/fa'
function Settings() {
  return (
    <>
    <div className='settings-page'>
      <div className='setting-container'>
        <div className='setting-header'><FaToolbox/>  Calendar Settings</div>
          <div className='setting-panel'>
            <ul className='settings'>
              <button>Layout</button>
              <button>Layout</button>
              <button>Layout</button>
              <button>Layout</button>
            </ul>
          </div>
        </div>
      <div className='setting-container'>
        <div className='setting-header'><FaToolbox/> Calendar Settings</div>
          <div className='setting-panel'>
            <ul className='settings'>
              <button>Layout</button>
              <button>Layout</button>
              <button>Layout</button>
              <button>Layout</button>
            </ul>
          </div>
        </div>
      <div className='setting-container'>
        <div className='setting-header'><FaToolbox/> Calendar Settings</div>
          <div className='setting-panel'>
            <ul className='settings'>
              <button>Layout</button>
              <button>Layout</button>
              <button>Layout</button>
              <button>Layout</button>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default Settings