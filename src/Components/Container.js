// container to center all components
export const Container = ({ children }) => {
  return (
    <div className="tablet:container m-auto p-6">
        { children }
    </div>
  )
}