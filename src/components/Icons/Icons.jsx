const defaultClassName = "w-6 h-6 "
export const CheckIcon = ({ className }) => {
  return (
    <svg
      className={defaultClassName + className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7">
      </path>
    </svg>
  )
}

export const TrashIcon = ({ className }) => {
  return (
    <svg
      className={defaultClassName + className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
      </path>
    </svg>
  )
}

export const SquareIcon = ({ className }) => {
  return (
    <svg
      className={defaultClassName + className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512">
      <path
        d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80z" />
    </svg>
  )
}
