import React from "react";
import Event from "./Event";

const Calendar = () => {
    return(
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event event = "Fancy Dinner 🪄" color = "green" location = "Makiana" />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event = "Starbucks 🍵" color = "green" location = "355 E Ohio St" />
                       
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <Event event = "Lunch with friends 🍔" color = "pink" location = "Millenium Park"/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>                        
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event = "Dentist 🦷" color = "blue" location = "646 Michigan Ave" />
                        <td></td>
                        <td></td>                        
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <Event event = "Gym 🏋️‍♂️" color = "blue" location = "143 Madison St"/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>                        
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <td></td>
                        <td></td>
                        <Event event = "Lunch with friends 🍔" color = "pink" location = "Millenium Park" />
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event = "Study 📖" color = "pink" location = "Library"/>
                        <td></td>                        
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <Event event = "Work 💼" color = "blue" location = "Library" />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>                        
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event = "Dinner with family 🍝" color = "pink" location = "Maple & Ash"/>
                        <td></td>
                        <td></td>
                        <td></td>                        
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <td></td>
                        <Event event = "Gym 🏋️‍♂️" color = "blue" location = "Wrigley"/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event = "Movie night 🎥" color = "green" location = "Magneficant Mile" />
                        <td></td>                        
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <Event event = "Study 📖" color = "pink" location = "library" />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>                        
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event = "Work 💼" color = "blue" location = "library"/>
                        <td></td>
                        <td></td>
                        <td></td>                        
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Calendar