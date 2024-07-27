import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../..'
import { useParams, useNavigate } from 'react-router-dom'
import profilePictures from '../../../public/ProfilePicture'
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBadge,
} from 'mdb-react-ui-kit';
import WholePageSpinner from '../../components/Utility/WholePageSpinner';
import { useUser } from '../../UserContext';
import Button from 'react-bootstrap/Button';

function ProfilePage() {

  const navigate = useNavigate();
  const test = useUser()
  console.log("use User: " + test);

  const onClick = () => {
    navigate("/main-menu");
  }

  const [user, setUser] = useState({});
  const [progress, setProgress] = useState(null);
  const { id } = useParams();

  const [isLoading, setLoading] = useState(true);

  console.log("reached profile page: " + id)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get(`${baseURL}/verification/profile-page/${id}`);
        setUser(userResponse.data);

        const progressResponse = await axios.get(`${baseURL}/userJourneyProgress`, {
          params: { User_id: id }
        });
        console.log(progressResponse)
        setProgress(progressResponse.data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id])

  return (
    <>
      {
        isLoading ?
          (
            <WholePageSpinner />
          ) :
          (
            <section style={{ backgroundColor: '#eee' }}>
              <div className="bg-dark rounded-3 p-3 mb-4 w-100 d-flex justify-content-between align-items-center">
                <span style={{ color: '#fff' }}>User Profile</span>
                <Button onClick={onClick}>Main Menu</Button>
              </div>
              <MDBContainer className="py-5">

                <MDBRow>
                  <MDBCol lg="4">
                    <MDBCard className="mb-4 bg-dark">
                      <MDBCardBody className="text-center">
                        <MDBCardImage
                          src={profilePictures[user.profileData.avatar]}
                          alt="avatar"
                          className="rounded-circle"
                          style={{ width: '150px' }}
                          fluid />
                        <p className="text-white mb-1">{user.profileData.username}</p>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol lg="8">
                    <MDBCard className="mb-4 bg-dark">
                      <MDBCardBody style={{ color: '#ccc' }}>
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText>Name</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-white">{user.name}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText>Description</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-white">{user.profileData.description}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody>
                    </MDBCard>

                    <MDBRow>
                      <MDBCol md="6">
                        <MDBCard className="mb-4 mb-md-0 bg-dark text-white">
                          <MDBCardBody>
                            <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Music Journey</span>Progress</MDBCardText>
                            <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1.7rem' }}>Level 1
                              {
                              progress.User_id === 'missing'
                                ? (<MDBBadge color='secondary' style={{ marginLeft: '65px' }}>Not Started</MDBBadge>)
                                : progress.Completed[0] 
                                ? (<MDBBadge color='success' style={{ marginLeft: '65px' }}>Completed</MDBBadge>)
                                : (<MDBBadge color='danger' style={{ marginLeft: '65px' }}>Not Completed</MDBBadge>)
                              }
                              <MDBBadge ></MDBBadge>
                            </MDBCardText>
                            <hr />
                            <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1.7rem' }}>Level 2
                              {
                              progress.User_id === 'missing'
                                ? (<MDBBadge color='secondary' style={{ marginLeft: '65px' }}>Not Started</MDBBadge>)
                                : progress.Completed[1] 
                                ? (<MDBBadge color='success' style={{ marginLeft: '65px' }}>Completed</MDBBadge>)
                                : (<MDBBadge color='danger' style={{ marginLeft: '65px' }}>Not Completed</MDBBadge>)
                              }
                            </MDBCardText>
                            <hr />
                            <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1.7rem' }}>Level 3
                              {
                              progress.User_id === 'missing'
                                ? (<MDBBadge color='secondary' style={{ marginLeft: '65px' }}>Not Started</MDBBadge>)
                                : progress.Completed[2] 
                                ? (<MDBBadge color='success' style={{ marginLeft: '65px' }}>Completed</MDBBadge>)
                                : (<MDBBadge color='danger' style={{ marginLeft: '65px' }}>Not Completed</MDBBadge>)
                              }
                            </MDBCardText>
                            <hr />
                            <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1.7rem' }}>Level 4
                              {
                              progress.User_id === 'missing'
                                ? (<MDBBadge color='secondary' style={{ marginLeft: '65px' }}>Not Started</MDBBadge>)
                                : progress.Completed[3] 
                                ? (<MDBBadge color='success' style={{ marginLeft: '65px' }}>Completed</MDBBadge>)
                                : (<MDBBadge color='danger' style={{ marginLeft: '65px' }}>Not Completed</MDBBadge>)
                              }
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>

                      <MDBCol md="6">
                        <MDBCard className="mb-4 mb-md-0 bg-dark text-white">
                          <MDBCardBody>
                            <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Rhythm Game</span>Progress</MDBCardText>
                            <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1.7rem' }}>Easy
                              {
                                user.highscores.easy == -1
                                ? (<MDBBadge color='secondary' style={{ marginLeft: '65px' }}>Not Started</MDBBadge>)
                                : (<MDBBadge color='success' style={{ marginLeft: '65px' }}>Highscore: {user.highscores.easy}</MDBBadge>)
                              }
                            </MDBCardText>
                            <hr />
                            <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1.7rem' }}>Medium
                              {
                                user.highscores.medium == -1
                                ? (<MDBBadge color='secondary' style={{ marginLeft: '65px' }}>Not Started</MDBBadge>)
                                : (<MDBBadge color='success' style={{ marginLeft: '65px' }}>Highscore: {user.highscores.medium}</MDBBadge>)
                              }
                            </MDBCardText>
                            <hr />
                            <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1.7rem' }}>Hard
                              {
                                user.highscores.hard == -1
                                ? (<MDBBadge color='secondary' style={{ marginLeft: '65px' }}>Not Started</MDBBadge>)
                                : (<MDBBadge color='success' style={{ marginLeft: '65px' }}>Highscore: {user.highscores.hard}</MDBBadge>)
                              }
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section >)

      }

    </>

  );
}

export default ProfilePage;