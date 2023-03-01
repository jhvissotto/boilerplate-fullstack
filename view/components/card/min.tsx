import { helpers } from '~/src'


const styles = {
    root: helpers.css`
        background-color: yellow;
    `,
}

export function Min({ children }) {
    return (
        <div css={styles.root} >
            {children}
        </div>
    )
}