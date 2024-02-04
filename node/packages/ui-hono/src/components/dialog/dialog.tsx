type Props = {
  isOpen: boolean;
  onClose?: () => void;
} & JSX.IntrinsicElements["dialog"];

export const Dialog = (
  {
    // children,
    // className,
    // isOpen,
    // onClose,
    // ...props
  }: Props,
) => {
  // const dialogRef = useRef<HTMLDialogElement | null>(null);

  // const stopPropagation = (e) => {
  //   e.stopPropagation();
  // };

  // useEffect(() => {
  //   if (!dialogRef.current) return;
  //   if (isOpen) {
  //     if (dialogRef.current.hasAttribute("open")) return;
  //     dialogRef.current.showModal();
  //   } else {
  //     if (!dialogRef.current.hasAttribute("open")) return;
  //     dialogRef.current.close();
  //   }
  // }, [isOpen]);

  // return (
  //   <dialog
  //     class={clsx([styles.dialog, className])}
  //     ref={dialogRef}
  //     onClick={onClose}
  //     {...props}
  //   >
  //     <div class={styles.dialogBody} onClick={stopPropagation}>
  //       {children}
  //     </div>
  //   </dialog>
  // );
  return <></>;
};
