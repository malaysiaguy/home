import { Container } from 'reactstrap'
import
{
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaTiktok,
    FaYoutube
} from 'react-icons/fa'

function Footer() {
    return (
        <Container className='bgImage text-light' style={{ padding: '50px'}}>
            <footer className='text-warning text-center position-relative'>
              <div>
                <h5>Connect With Me 联系网 Rangkaian Hubungan</h5>
                    <nav>
                      <ul class="min-list social-icons-list group">
                        <li>
                          <a href="https://www.facebook.com/profile.php?id=100010135360047" class="social-color-facebook" target="_blank"><FaFacebook /></a>
                        </li>
                        <li>
                          <a href="https://twitter.com/Malaysiaguy2017/" class="social-color-twitter" target="_blank"><FaTwitter /></a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/channel/UC31BVs3VNXerLGfSqLwO2Ug" class="social-color-youtube" target="_blank"><FaYoutube /></a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/eng-chye-toh-4a197b266/" class="social-color-linkedin" target="_blank"><FaLinkedin /></a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/malaysiaguy2016/" class="social-color-instagram" target="_blank"><FaInstagram /></a>
                        </li>
                        <li>
                          <a href="https://www.tiktok.com/@malaysiaguy2021/" class="social-color-tiktok" target="_blank"><FaTiktok /></a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                <h5 className='lead'><strong>Malaysiaguy Profile@Mar 2023</strong></h5>
{/*                        <a href='#' className='position-absolute bottom-0 end-0 p-5'>
                        <i className='bi bi-arrow-up-circle h1'>
                    </a> */}
            </footer>
        </Container>
    )
}

export default Footer