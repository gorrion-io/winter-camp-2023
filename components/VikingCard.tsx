import { Viking } from "../types/Viking"

export const VikingCard = ({ viking }: { viking: Viking }) => {
    
    return (
        <li  className='vikings-list__item'>
            <div className="section">
                <h4>Name:</h4>
                <span>{viking.fullName}</span>
            </div>
            <div className="section">
                <h4>Age:</h4>
                <span>{viking.age}</span>
            </div>
            <div className="section">
                <h4>Hometown:</h4>
                <span>{viking.hometown}</span>
            </div>
            <div className="section">
                <h4>Children:</h4>
                <span>{viking.presenceOfChildren ? 'Yes' : 'No'}</span>
            </div>
            <div className="section">
                <h4>Weapon:</h4>
                <span>{viking.canFightWithSword ? 'sword' : viking.canFightWithAxe ? 'axe' : viking.canFightWithSpear ? 'spear' : 'none'}</span>
            </div>
        </li>
    )
}