import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';


const Button = ({incrementPage}) => {
  return (
            <button
            className={styles.Button}  
            type="button"
            onClick={() => {
              incrementPage();
              }}
             >
              Load More
            </button>
          );
  };

// const Button = ({ incrementPage }) => {
//   const scrollingRef = useRef();
//   return (
//     <button
//       onClick={() => {
//         incrementPage(scrollingRef);
//       }}
//       className={styles.Button}
//       ref={scrollingRef}
//       type="button"
//     >
//       Load More
//     </button>
//   );
// };

Button.propTypes = {
  incrementPage: PropTypes.func.isRequired,
};

export default Button;