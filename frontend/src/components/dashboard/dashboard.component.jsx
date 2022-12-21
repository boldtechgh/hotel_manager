import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, PieChart } from '../charts';
import ComponentTitle from '../component-title';
import ExpectedArrivals from '../expected-arrivals';
import ExpectedDepartures from '../expected-arrivals/departures';
import InfoCard from '../info-card';
import InfoTable from '../info-table';
import RoomType from '../room-type';
import './dashboard.styles.scss';
import LogoImg from '../../images/google.png';

const DashComponent = () => {
    return (
        <>
        <ComponentTitle><h1>Dashboard</h1></ComponentTitle>
        <div className='info-section'>
            <InfoCard bgColor="#488A99" icon={<FontAwesomeIcon icon={faBuilding} />} name="Rooms" value="200" />
            <InfoCard bgColor="#1C4E80" icon={<FontAwesomeIcon icon={faBuilding} />} name="Occupied" value="200" />
            <InfoCard bgColor="#1F3F49" icon={<FontAwesomeIcon icon={faBuilding} />} name="Booked" value="200" />
            <InfoCard bgColor="#202020" icon={<FontAwesomeIcon icon={faBuilding} />} name="Available" value="200" />
        </div>
        <div className='statistics'>
            <div className='top-section'>
            <div className='chart-section'>
                <div className='reservation-chart'>
                    <div className='chart-title'>
                        <h2>Room status</h2>
                        <Link to="/">View</Link>
                    </div>
                    <PieChart labels={['Reserved', 'Occupied', 'Available','Maintenance']} label="Rooms" values={[20, 50, 125,5]} colors={['#488A99', '#1C4E80', '#1F3F49','#202020']} />
                </div>
                <div className='room-info'>
                    <div className='chart-title'>
                        <h2>Room type</h2>
                        <Link to="/">View</Link>
                    </div>
                    <div className='room-info-table'>
                        <RoomType />
                    </div>    
                </div>
                </div>
                <div className='expected'>
                    <ExpectedArrivals />
                    <ExpectedDepartures />
                </div>
            </div>
            <div className='rigth-side-section'>
                <div className='hotel-status'>
                 <div className='chart-title'>
                        <h2>Current Status</h2>
                        <Link to="/">View</Link>
                    </div>
                    <div className='current-status'>
                       <div className='desc'></div>
                       <div className='room'><h3>Rooms</h3></div>
                       <div className='percent'><h3>Percent</h3></div>
                    </div>
                    <div className='current-status'>
                       <div className='desc'><h3>Start of Day</h3></div>
                       <div className='room'>58</div>
                       <div className='percent'>91%</div>
                    </div>
                    <div className='current-status'>
                       <div className='desc'>Realized Arrivals</div>
                       <div className='room'>8</div>
                       <div className='percent'>13%</div>
                    </div>
                    <div className='current-status'>
                       <div className='desc'>Realized Departures</div>
                       <div className='room'>6</div>
                       <div className='percent'>10%</div>
                    </div>
                     <div className='current-status'>
                       <div className='desc'><h3>Current Status</h3></div>
                       <div className='room'>58</div>
                       <div className='percent'>91%</div>
                    </div>
                    <div className='current-status'>
                       <div className='desc'>Expected Arrivals</div>
                       <div className='room'>8</div>
                       <div className='percent'>13%</div>
                    </div>
                    <div className='current-status'>
                       <div className='desc'>Expected Departures</div>
                       <div className='room'>6</div>
                       <div className='percent'>10%</div>
                    </div>
            </div>

            <div className='activities'>
                 <div className='chart-title'>
                        <h2>Recent Activity</h2>
                        <Link to="/">View</Link>
                    </div>
                    <div className='activity'>
                        <div className='profile-photo'>
                            <img src={LogoImg} alt="test" />
                        </div>
                        <div className='activity-desc'>
                            <p className='desc'>John Doe requested a room.</p>
                            <p className='time'>2 hours ago</p>
                        </div>
                    </div>
                    <div className='activity'>
                        <div className='profile-photo'>
                            <img src={LogoImg} alt="test" />
                        </div>
                        <div className='activity-desc'>
                            <p className='desc'>John Doe requested a room.</p>
                            <p className='time'>2 hours ago</p>
                        </div>
                    </div>
                    <div className='activity'>
                        <div className='profile-photo'>
                            <img src={LogoImg} alt="test" />
                        </div>
                        <div className='activity-desc'>
                            <p className='desc'>John Doe requested a room.</p>
                            <p className='time'>2 hours ago</p>
                        </div>
                    </div>
            </div>
            </div>
            
        </div>
        
        </>
    )
}

export default DashComponent;