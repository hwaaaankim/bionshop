function Label({ name, className, required }) {
  className = className
  return (
    <div className="mb-1 mt-3">
      {required ? (
        <span className="text-red-500 font-semibold mt-2 mr-1">*</span>
      ) : (
        ''
      )}
      <label className={className}>{name}</label>
    </div>
  )
}

export default Label
