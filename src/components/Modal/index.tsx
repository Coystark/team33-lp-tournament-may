/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import Button from '../Button';

interface IProps {
  children: any;
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
  className?: string;
}

const ReactModalAdapter: React.FC<IProps> = (props: IProps) => {
  const {
    isOpen,
    onRequestClose,
    contentLabel,
    children,
    className,
  } = props;

  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      portalClassName={className}
      className={contentClassName}
      overlayClassName={overlayClassName}
      ariaHideApp={false}
    >
      {children}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <Button onClick={onRequestClose}>CLOSE</Button>
      </div>
    </ReactModal>
  );
};

ReactModalAdapter.defaultProps = {
  className: '',
};

const StyledModal = styled(ReactModalAdapter)`
  &__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.76);
  }

  &__content {
    height: 700px;
    max-width: 700px;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: auto;
    background: #4d0c66;
    border-radius: 1;
    border: 2px solid #9039b5;
    padding: 20px;
    font-family: 'Source Sans Pro', sans-serif;

    @media(max-width: 768px) {
      width: 90%;
      height: 70%;

    }
    
    // position
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);

    // Scroll
    &::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background-color: #9039b5;
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: white; 
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #e0e0e0; 
    }
  }
`;

export default StyledModal;
