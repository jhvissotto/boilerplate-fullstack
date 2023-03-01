import { helpers } from '~/src'


const styles = {
    root: helpers.css`
        background-color: blue;
    `,
}


export function Accept({ onClick }) {
    return (
        <button css={styles.root} onClick={onClick} >
            Accept
        </button>
    )
}