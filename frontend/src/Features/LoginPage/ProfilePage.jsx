import {React, useEffect, useState} from 'react';
import axios from 'axios';
import {baseURL} from '../..'
import useParams from 'react-router-dom'
import profilePictures from '../../../public/ProfilePicture'
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBBadge,
  MDBBtn,
} from 'mdb-react-ui-kit';

function ProfilePage() {

  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(null);
  const User_id = useParams()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${baseURL}/verification/profile-page/:id`);
        setUser(response.data);

        const helper = await axios.get(`${baseURL}/userJourneyProgress`, {
          params: {
            User_id: User_id
          }
      })
        setProgress(helper.data)

      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [User_id]);

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-dark rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem active style={{ color: '#fff' }}>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
          <MDBCol md="4" className="d-flex justify-content-end align-items-center">
            <MDBBtn href="/main-menu" color="primary" className="text-white">Main Menu</MDBBtn>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4 bg-dark">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src= {user.profileData.avatar}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-white mb-1">{profilePictures[user.profileData.username]}</p>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0 bg-dark">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3" style={{ backgroundColor: '#333' }}>
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText style={{ color: '#fff' }}>Achievement 1</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3" style={{ backgroundColor: '#333' }}>
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText style={{ color: '#fff' }}>Achievement 2</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3" style={{ backgroundColor: '#333' }}>
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                    <MDBCardText style={{ color: '#fff' }}>Achievement 3</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3" style={{ backgroundColor: '#333' }}>
                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                    <MDBCardText style={{ color: '#fff' }}>Achievement 4</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3" style={{ backgroundColor: '#333' }}>
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText style={{ color: '#fff' }}>Achievement 5</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
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
                      {progress.Completed[0] ? (<MDBBadge color='success' style={{ marginLeft: '65px' }}>Completed</MDBBadge>)
                                             : (<MDBBadge color='danger' style={{ marginLeft: '65px' }}>Not Completed</MDBBadge>)
                      }
                        <MDBBadge ></MDBBadge>
                    </MDBCardText>
                    <hr />
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1.7rem' }}>Level 2
                      {progress.Completed[1] ? (<MDBBadge color='success' style={{ marginLeft: '65px' }}>Completed</MDBBadge>)
                                             : (<MDBBadge color='danger' style={{ marginLeft: '65px' }}>Not Completed</MDBBadge>)
                      }
                    </MDBCardText>
                    <hr />
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1.7rem' }}>Level 3
                      {progress.Completed[2] ? (<MDBBadge color='success' style={{ marginLeft: '65px' }}>Completed</MDBBadge>)
                                             : (<MDBBadge color='danger' style={{ marginLeft: '65px' }}>Not Completed</MDBBadge>)
                      }
                    </MDBCardText>
                    <hr />
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1.7rem' }}>Level 4
                      {progress.Completed[3] ? (<MDBBadge color='success' style={{ marginLeft: '65px' }}>Completed</MDBBadge>)
                                             : (<MDBBadge color='danger' style={{ marginLeft: '65px' }}>Not Completed</MDBBadge>)
                      }
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className = "mb-4 mb-md-0 bg-dark text-white">
                <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Music Journey</span>Progress</MDBCardText>
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1.7rem' }}>World 1
                        <MDBBadge color='danger' style={{ marginLeft: '65px' }}>Not Completed</MDBBadge>
                    </MDBCardText>
                    <hr />
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1.7rem' }}>World 2
                        <MDBBadge color='danger' style={{ marginLeft: '65px' }}>Not Completed</MDBBadge>
                    </MDBCardText>
                    <hr />
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1.7rem' }}>World 3
                        <MDBBadge color='danger' style={{ marginLeft: '65px' }}>Not Completed</MDBBadge>
                    </MDBCardText>
                    <hr />
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1.7rem' }}>World 4
                        <MDBBadge color='success' style={{ marginLeft: '65px' }}>Completed</MDBBadge>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default ProfilePage;