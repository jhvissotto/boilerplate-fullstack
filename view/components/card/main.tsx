import { helpers } from '~/src'


const styles = {
    root: helpers.css`
        background-color: green;
    `,
}

export function Main({ children }) {
    return (
        <div css={styles.root} >
            {children}
        </div>
    )
}