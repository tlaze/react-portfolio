import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhoneSquareAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'




function footer() {

    const hoverOn = e => {
        e.target.style.color = 'white';
    }

    const hoverOff = e => {
        e.target.style.color = 'grey';
    }



    const styles = {
        footerStyle: {
            background: '#262626',
            position: 'absolute',
            bottom: 0,
            height: '50px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        footerIcons: {
            marginLeft: '20px',
            marginRight: '20px',
            color:'grey',
        },
    }
    return(
        <footer style={styles.footerStyle}>
            <a href='https://github.com/tlaze' target='blank' style={styles.footerIcons}><FontAwesomeIcon onMouseOver={hoverOn} onMouseOut={hoverOff} icon={faGithubSquare} size="2x" /></a>
            <a href='https://www.linkedin.com/in/tlaze' target='blank' style={styles.footerIcons}><FontAwesomeIcon onMouseOver={hoverOn} onMouseOut={hoverOff} icon={faLinkedin} size="2x" /></a>
            <a href='/' style={styles.footerIcons}><FontAwesomeIcon onMouseOver={hoverOn} onMouseOut={hoverOff} icon={faPhoneSquareAlt} size="2x" /></a>
            <a href='/' style={styles.footerIcons}><FontAwesomeIcon onMouseOver={hoverOn} onMouseOut={hoverOff} icon={faEnvelope} size="2x" /></a>
        </footer>
    )
}
export default footer;