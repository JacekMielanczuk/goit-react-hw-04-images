import React, { useEffect } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

// class Modal extends React.Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.props.onKeyDown);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.props.onKeyDown);
//   }

const Modal = ({ onBackdrop, onKeyDown, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  // render() {
  //   const { onBackdrop, children } = this.props;

  //   return (
  //     <div className={styles.overlay} onClick={onBackdrop}>
  //       <div className={styles.modal}>
  //         <img src={children} alt={children} />
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className={styles.overlay} onClick={onBackdrop}>
      <div className={styles.modal}>
        <img src={children} alt={children} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onKeyDown: PropTypes.func.isRequired,
  onBackdrop: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
