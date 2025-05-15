
const Toolbar  = (props) => {

    const getButtons = () => {
        return props.filters.map((filter) => {
            const className = props.selected == filter ? 'selected' : null

            return (<button className={className} onClick={() => props.onSelectFilter(filter)}>{filter}</button>)
        })
    }

    return (
        <>
            <div className="row" children={getButtons()}/>
        </>
    )
}

export default Toolbar