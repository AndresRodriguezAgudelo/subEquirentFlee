import { CSSProperties } from 'react';

export const inputStyle: CSSProperties = {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    flex: '1',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
};

export const bigInputStyle: CSSProperties = {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    width: '100%',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
};

export const filterContainerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: '16px',
    flexWrap: 'wrap',
    marginBottom: '16px',
    marginTop: '30px',
    width: '100%',
};

export const verticalBoxBigFilter: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    flex: '3',
}

export const verticalBoxNormalFilter: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
}
