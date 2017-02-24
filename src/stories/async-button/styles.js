const lightGreen = '#3CCD94';

const font = {
    fontSize: '14px',
    color: 'white',
    fontWeight: 100,
    textTransform: 'uppercase',
    letterSpacing: '2px'
}

const _dynamic = (isSaving, isSaved) => {
    if(isSaving) {
        return {
            background: 'white',
            color: '#333',
            border: '2px solid #333',
            cursor: 'default'
        }
    }

    if(isSaved) {
        return {
            background: 'white',
            color: lightGreen,
            border: `2px solid ${lightGreen}`,
            cursor: 'default'
        }
    }

    return {}
}

const button = (isSaving, isSaved) => ({
    outline: 'none',
    border: `2px solid ${lightGreen}`,
    cursor: 'pointer',
    background: lightGreen,
    padding: '15px 40px',
    borderRadius: '8px',
    transition: 'all .5s ease',
    ...font,
    ..._dynamic(isSaving, isSaved)
})

export default {
    root: {
        margin: '20px 20px'
    },
    button
}
