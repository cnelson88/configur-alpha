import Maps from '../google-maps/Maps';
import { Grid } from '../styles/grid';

const UserDetails = (queryResults: any) => {
    const userDetails = queryResults.queryResults;

    const userinfo = () => {
        return (
            <Grid>
                <div className='user-container'>
                    <div className='user-container user-container__header'>
                        <img className='user-container__header--img' src='https://www.configur.tech/wp-content/uploads/2020/12/Staff2.png' />
                        <div className='user-container user-container__info'>
                            <h1>{userDetails.queryResults[0].name}</h1>
                            <h3><b>Phone:</b> {userDetails.queryResults[0].phone}</h3>
                            <img src='https://www.configur.tech/wp-content/uploads/2020/12/Squiggles1.png' />
                            <h3><b>Email:</b> {userDetails.queryResults[0].email}</h3>
                            <h3><b>Website:</b> {userDetails.queryResults[0].website}</h3>
                        </div>
                    </div>
                    <div className='user-container-info'>
                        <div>
                            <img src='https://www.configur.tech/wp-content/uploads/2020/12/Squiggles1.png' />
                            <h3>Address</h3>
                            <p><b>Suite:</b> {userDetails.queryResults[0].address.suite}</p>
                            <p><b>Street:</b> {userDetails.queryResults[0].address.street}</p>
                            <p><b>City:</b> {userDetails.queryResults[0].address.city}</p>
                            <p><b>Zipcode:</b> {userDetails.queryResults[0].address.zipcode}</p>           
                        </div>
                        <div>
                        <img src='https://www.configur.tech/wp-content/uploads/2020/12/squiggles2.png' />
                            <h3>Company</h3>
                            <p><b>Name:</b> {userDetails.queryResults[0].company.name}</p>
                            <p><b>BS:</b> {userDetails.queryResults[0].company.bs}</p>
                            <p><b>Catch Phrase:</b> {userDetails.queryResults[0].company.catchPhrase}</p>
                        </div>
                    </div>
                    <div className='user-container-info__maps'>
                        <Maps mapDetails={queryResults} />
                    </div>
                </div>
            </Grid>
        )
    }

    return (
        <>
            {userinfo()}
        </>
    )
}

export default UserDetails;