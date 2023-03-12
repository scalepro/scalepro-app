import { Button, Spinner } from "flowbite-react";

export default function ButtonSent({ loadingSubmit, actionName, actionSent }) {
  const actionNameLoading = actionName.replace("ar", "ando ...");
  return (
    <>
      {!loadingSubmit ? (
        actionSent ? (
          <Button onClick={actionSent}>{actionName}</Button>
        ) : (
          <Button type="submit">{actionName}</Button>
        )
      ) : (
        <Button>
          <div className="mr-3">
            <Spinner size="sm" light={true} />
          </div>
          {actionNameLoading}
        </Button>
      )}
    </>
  );
}
