import React from "react";

export interface LogoProps extends React.HTMLProps<HTMLOrSVGElement> {}

function Logo({ className }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 354 356"
      className={className}
    >
      <path
        fill="currentColor"
        d="M95.741 195.394c2.704 1.54 4.687 4.102 5.4 7.566 1.402 6.815-3.035 13.551-9.907 14.965l-12.346 2.54-8.516-41.396 12.346-2.54c6.871-1.414 13.607 3.023 15.02 9.895.702 3.407-.109 6.544-1.997 8.97Zm-16.669-10.546 2.127 10.336 5.14-1.058c2.792-.574 4.712-3.415 4.137-6.208-.586-2.849-3.415-4.713-6.264-4.127l-5.14 1.057Zm5.529 26.872 5.14-1.058c2.792-.574 4.712-3.415 4.137-6.208-.574-2.793-3.415-4.713-6.264-4.127l-5.14 1.058 2.127 10.335ZM116.407 197.082l-2.96.609 3.091 15.028-7.262 1.494-8.517-41.396 12.346-2.54c6.928-1.425 13.664 3.012 15.077 9.883l.322 1.565c.989 4.804-.943 9.569-4.607 12.419l10.518 14.897-8.324 1.713-9.684-13.672Zm-6.891-18.497 2.448 11.9 5.084-1.046c2.837-.642 4.757-3.483 4.194-6.22l-.322-1.564c-.654-2.894-3.471-4.702-6.32-4.116l-5.084 1.046ZM131.97 166.396l7.263-1.494 8.516 41.396-7.262 1.494-8.517-41.396ZM171.5 158.263l8.516 41.397-7.262 1.494-15.37-22.343 5.034 24.469-7.206 1.483-8.517-41.397 7.263-1.494 15.369 22.343-5.034-24.469 7.207-1.483ZM206.126 169.424l2.356 11.452c1.402 6.816-3.035 13.552-9.906 14.965-6.816 1.403-13.552-3.035-14.954-9.85l-3.402-16.536c-1.414-6.872 3.023-13.608 9.839-15.01 6.871-1.413 13.607 3.024 15.021 9.895l-7.207 1.483c-.642-2.838-3.515-4.634-6.308-4.059-2.849.586-4.69 3.526-4.138 6.208l3.402 16.536c.63 2.782 3.515 4.634 6.252 4.071 2.894-.654 4.769-3.427 4.194-6.22l-.862-4.19-5.251 1.08-1.494-7.262 12.458-2.563ZM214.257 196.167l30.726-6.321 1.138 5.531-30.726 6.321-1.138-5.531ZM239.609 144.251l7.263-1.494 8.516 41.396-7.262 1.494-8.517-41.396ZM278.119 143.899l-8.771 1.804 7.022 34.134-7.262 1.494-7.023-34.134-8.771 1.804-1.494-7.262 24.805-5.103 1.494 7.263Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m77.832 222.069-9.064-44.057 13.676-2.813c7.606-1.565 15.06 3.345 16.625 10.951.67 3.256.1 6.325-1.422 8.864 2.405 1.764 4.143 4.364 4.824 7.672 1.554 7.554-3.36 15.005-10.963 16.569l-13.676 2.814Zm19.051-25.931c-.364-.27-.745-.517-1.142-.743.28-.36.537-.736.768-1.125 1.328-2.238 1.827-4.944 1.23-7.846-1.414-6.872-8.15-11.309-15.02-9.895l-12.347 2.54 8.516 41.396 12.346-2.54c6.872-1.414 11.309-8.149 9.907-14.965-.608-2.956-2.141-5.254-4.258-6.822Zm-15.684-.954-2.126-10.335 5.14-1.058c2.848-.586 5.677 1.278 6.264 4.127.574 2.793-1.345 5.634-4.139 6.208l-5.14 1.058Zm-.523-9.279 1.58 7.675 3.809-.784c2.077-.427 3.501-2.564 3.081-4.604-.435-2.115-2.546-3.505-4.66-3.07l-3.81.783Zm4.981 24.211 3.81-.784c2.077-.427 3.501-2.564 3.081-4.604-.425-2.068-2.555-3.503-4.66-3.07l-3.81.783 1.58 7.675Zm4.083.547c2.794-.575 4.713-3.416 4.139-6.209-.575-2.793-3.416-4.713-6.265-4.126l-5.14 1.057 2.127 10.335 5.14-1.057Zm36.351.091-9.683-13.672-2.961.61 3.091 15.027-7.262 1.494-8.516-41.396 12.346-2.54c6.927-1.425 13.663 3.012 15.077 9.884l.321 1.564c.989 4.804-.942 9.569-4.607 12.419l10.518 14.897-8.324 1.713Zm-.372-16.384c3.407-3.203 5.12-8.038 4.115-12.919l-.321-1.564c-1.566-7.61-9.023-12.515-16.681-10.94l-13.676 2.814 9.064 44.056 9.922-2.041-3.091-15.028.761-.157 9.684 13.672 11.226-2.31-11.003-15.583Zm-13.755-3.885-2.448-11.899 5.084-1.046c2.849-.586 5.667 1.221 6.32 4.115l.322 1.564c.563 2.737-1.356 5.578-4.194 6.22l-5.084 1.046Zm4.796-2.373c2.162-.496 3.555-2.661 3.152-4.619l-.319-1.551c-.497-2.17-2.604-3.507-4.719-3.072l-3.754.772 1.901 9.239 3.739-.769Zm13.607-22.772 9.923-2.042 9.063 44.057-9.922 2.041-9.064-44.056Zm42.189-8.68 9.064 44.056-9.475 1.95-12.079-17.561 3.957 19.232-9.867 2.03-9.064-44.057 9.475-1.949 12.079 17.56-3.957-19.231 9.867-2.03Zm-3.229 27.555-15.369-22.342-7.262 1.494 8.516 41.396 7.207-1.483-5.034-24.469 15.369 22.343 7.262-1.494-8.516-41.396-7.207 1.482 5.034 24.469Zm37.856-16.395 2.629 12.783c1.554 7.554-3.36 15.005-10.963 16.569-7.55 1.553-15.004-3.357-16.557-10.907l-3.402-16.536c-1.564-7.603 3.342-15.06 10.896-16.614 7.606-1.564 15.06 3.346 16.624 10.952l.274 1.33-9.841 2.025-.294-1.299c-.476-2.104-2.629-3.457-4.71-3.029-2.106.433-3.484 2.649-3.082 4.605l3.399 16.521c.473 2.056 2.64 3.435 4.639 3.032 2.216-.508 3.565-2.605 3.151-4.619l-.589-2.86-5.251 1.08-2.042-9.922 15.119-3.111Zm-6.769 10.349.862 4.19c.574 2.794-1.301 5.567-4.194 6.22-2.738.563-5.623-1.289-6.253-4.071l-3.402-16.536c-.552-2.681 1.289-5.622 4.138-6.208 2.793-.575 5.667 1.221 6.309 4.059l7.206-1.482c-.092-.45-.207-.889-.344-1.316-1.951-6.111-8.255-9.901-14.677-8.579-6.815 1.402-11.252 8.138-9.839 15.009l3.402 16.536c1.402 6.816 8.138 11.253 14.954 9.851 6.871-1.414 11.308-8.15 9.906-14.965l-2.356-11.453-12.458 2.563 1.494 7.263 5.252-1.081Zm12.24 16.942 33.386-6.869 1.685 8.191-33.386 6.869-1.685-8.191Zm25.352-51.916 9.923-2.041 9.063 44.056-9.922 2.041-9.064-44.056Zm41.717 1.76-8.771 1.805 7.022 34.133-9.923 2.042-7.022-34.134-8.771 1.805-2.041-9.923 27.464-5.65 2.042 9.922Zm-17.637 2.242 7.022 34.134 7.262-1.494-7.022-34.134 8.771-1.804-1.494-7.263-24.804 5.103 1.494 7.263 8.771-1.805Zm-130.115 19.199 8.516 41.396 7.263-1.494-8.517-41.396-7.262 1.494Zm82.287 29.772 1.137 5.53 30.726-6.321-1.138-5.531-30.725 6.322Zm25.352-51.917 8.516 41.397 7.263-1.494-8.517-41.397-7.262 1.494Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M83.428 135.539c2.704 1.54 4.687 4.102 5.4 7.565 1.401 6.816-3.036 13.552-9.907 14.966l-12.346 2.54-8.517-41.397 12.346-2.54c6.872-1.413 13.608 3.024 15.021 9.895.701 3.408-.11 6.545-1.997 8.971Zm-16.67-10.546 2.127 10.335 5.14-1.057c2.793-.575 4.712-3.415 4.138-6.209-.586-2.849-3.415-4.712-6.264-4.126l-5.14 1.057Zm5.53 26.871 5.139-1.057c2.793-.575 4.712-3.415 4.138-6.208-.575-2.794-3.415-4.713-6.265-4.127l-5.14 1.057 2.127 10.335ZM104.094 137.227l-2.961.609 3.092 15.028-7.263 1.494-8.516-41.396 12.346-2.54c6.927-1.425 13.663 3.012 15.077 9.883l.322 1.564c.988 4.805-.943 9.569-4.608 12.42l10.519 14.897-8.324 1.712-9.684-13.671Zm-6.892-18.497 2.448 11.899 5.084-1.046c2.838-.642 4.757-3.482 4.194-6.219l-.322-1.565c-.653-2.893-3.471-4.701-6.32-4.115l-5.084 1.046ZM119.657 106.541l7.263-1.495 8.516 41.397-7.263 1.494-8.516-41.396ZM159.186 98.408l8.517 41.396-7.263 1.495-15.369-22.343 5.034 24.469-7.207 1.482-8.516-41.396 7.262-1.494 15.369 22.343-5.034-24.47 7.207-1.482ZM193.812 109.569l2.357 11.452c1.402 6.816-3.036 13.551-9.907 14.965-6.816 1.402-13.551-3.035-14.954-9.85l-3.402-16.537c-1.413-6.871 3.024-13.607 9.84-15.009 6.871-1.414 13.607 3.023 15.021 9.895l-7.207 1.483c-.642-2.838-3.516-4.634-6.309-4.06-2.849.586-4.69 3.527-4.138 6.209l3.402 16.536c.631 2.782 3.516 4.634 6.253 4.071 2.893-.654 4.769-3.427 4.194-6.22l-.862-4.19-5.251 1.08-1.495-7.262 12.458-2.563ZM201.944 136.312l30.726-6.321 1.138 5.53-30.726 6.322-1.138-5.531ZM227.296 84.396l7.262-1.494 8.517 41.396-7.263 1.494-8.516-41.396ZM265.805 84.043l-8.771 1.805 7.023 34.133-7.263 1.495-7.022-34.134-8.771 1.804-1.494-7.262 24.804-5.103 1.494 7.262Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m65.518 162.214-9.063-44.057 13.676-2.813c7.606-1.565 15.06 3.345 16.625 10.951.67 3.256.1 6.325-1.423 8.863 2.405 1.765 4.144 4.365 4.825 7.673 1.554 7.554-3.361 15.005-10.963 16.569l-13.677 2.814Zm19.052-25.931c-.364-.27-.745-.518-1.142-.744.28-.359.536-.735.767-1.125 1.328-2.237 1.828-4.943 1.23-7.845-1.413-6.872-8.149-11.309-15.02-9.895l-12.347 2.54 8.517 41.396 12.346-2.54c6.871-1.414 11.309-8.15 9.906-14.965-.608-2.956-2.14-5.255-4.257-6.822Zm-15.685-.954-2.126-10.335 5.14-1.058c2.849-.586 5.678 1.278 6.264 4.127.575 2.793-1.345 5.634-4.138 6.208l-5.14 1.058Zm-.522-9.279 1.579 7.675 3.81-.784c2.077-.427 3.5-2.564 3.08-4.605-.434-2.114-2.545-3.505-4.66-3.07l-3.81.784Zm4.98 24.211 3.81-.784c2.078-.427 3.502-2.564 3.082-4.604-.425-2.068-2.555-3.504-4.66-3.071l-3.81.784 1.579 7.675Zm4.084.546c2.793-.574 4.713-3.415 4.138-6.208-.575-2.793-3.415-4.713-6.264-4.127l-5.14 1.058 2.126 10.335 5.14-1.058Zm36.351.092-9.684-13.672-2.961.609 3.092 15.028-7.262 1.494-8.517-41.396 12.346-2.54c6.928-1.425 13.663 3.012 15.077 9.884l.322 1.564c.988 4.804-.943 9.569-4.607 12.419l10.518 14.897-8.324 1.713Zm-.372-16.384c3.407-3.203 5.119-8.038 4.115-12.919l-.322-1.564c-1.565-7.61-9.022-12.516-16.68-10.94l-13.677 2.814 9.064 44.056 9.923-2.041-3.092-15.028.762-.157 9.684 13.672 11.225-2.31-11.002-15.583Zm-13.755-3.885-2.448-11.9 5.083-1.045c2.85-.587 5.667 1.221 6.321 4.115l.321 1.564c.564 2.737-1.356 5.578-4.194 6.22l-5.083 1.046Zm4.796-2.373c2.161-.496 3.554-2.661 3.151-4.619l-.319-1.551c-.496-2.17-2.604-3.508-4.719-3.072l-3.754.772 1.901 9.239 3.74-.769Zm13.607-22.773 9.922-2.041 9.064 44.056-9.923 2.042-9.063-44.057Zm42.189-8.68 9.064 44.057-9.475 1.949-12.079-17.56 3.956 19.232-9.867 2.03-9.064-44.057 9.475-1.949 12.079 17.56-3.956-19.231 9.867-2.03Zm-3.229 27.556-15.369-22.343-7.263 1.495 8.517 41.396 7.206-1.483-5.034-24.469 15.369 22.343 7.263-1.494-8.517-41.396-7.206 1.482 5.034 24.469Zm37.855-16.395 2.63 12.783c1.554 7.554-3.361 15.005-10.963 16.569-7.55 1.553-15.004-3.357-16.557-10.907l-3.402-16.537c-1.564-7.602 3.341-15.059 10.895-16.613 7.606-1.565 15.06 3.346 16.625 10.952l.274 1.33-9.841 2.024-.294-1.298c-.476-2.104-2.63-3.457-4.711-3.029-2.105.433-3.484 2.648-3.082 4.604l3.4 16.522c.473 2.056 2.64 3.435 4.639 3.031 2.216-.507 3.564-2.605 3.15-4.618l-.588-2.86-5.252 1.08-2.041-9.922 15.118-3.111Zm-6.769 10.349.862 4.19c.575 2.793-1.3 5.566-4.194 6.22-2.737.563-5.622-1.289-6.253-4.071l-3.402-16.536c-.551-2.681 1.289-5.622 4.138-6.208 2.794-.575 5.667 1.221 6.309 4.059l7.207-1.483a13.065 13.065 0 0 0-.344-1.315c-1.951-6.111-8.255-9.9-14.677-8.58-6.816 1.403-11.253 8.138-9.839 15.01l3.402 16.536c1.402 6.815 8.138 11.253 14.953 9.85 6.872-1.413 11.309-8.149 9.907-14.965l-2.356-11.452-12.458 2.563 1.494 7.262 5.251-1.08Zm12.24 16.942 33.386-6.869 1.686 8.191-33.387 6.869-1.685-8.191Zm25.352-51.916 9.923-2.042 9.064 44.057-9.923 2.041-9.064-44.056Zm41.717 1.76-8.771 1.805 7.023 34.133-9.923 2.042-7.022-34.134-8.771 1.804-2.042-9.922 27.465-5.65 2.041 9.922Zm-17.637 2.242 7.022 34.134 7.263-1.494-7.022-34.134 8.77-1.804-1.494-7.263-24.804 5.103 1.494 7.263 8.771-1.805Zm-130.115 19.199 8.517 41.396 7.262-1.494-8.516-41.396-7.263 1.494Zm82.287 29.771 1.138 5.531 30.726-6.321-1.138-5.531-30.726 6.321Zm25.352-51.916 8.517 41.396 7.262-1.494-8.516-41.396-7.263 1.494Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M109.385 254.977c2.704 1.54 4.687 4.102 5.4 7.565 1.402 6.816-3.035 13.552-9.907 14.965l-12.346 2.54-8.516-41.396 12.346-2.54c6.871-1.414 13.607 3.024 15.021 9.895.701 3.408-.11 6.544-1.998 8.971Zm-16.669-10.546 2.127 10.335 5.14-1.057c2.792-.575 4.712-3.416 4.137-6.209-.586-2.849-3.415-4.713-6.264-4.126l-5.14 1.057Zm5.529 26.871 5.139-1.057c2.793-.575 4.713-3.415 4.138-6.209-.574-2.793-3.415-4.712-6.264-4.126l-5.14 1.057 2.127 10.335ZM130.051 256.665l-2.96.609 3.091 15.028-7.262 1.494-8.517-41.397 12.347-2.54c6.927-1.425 13.663 3.012 15.076 9.884l.322 1.564c.989 4.805-.943 9.569-4.607 12.419l10.518 14.898-8.324 1.712-9.684-13.671Zm-6.891-18.497 2.448 11.899 5.084-1.046c2.837-.642 4.757-3.482 4.194-6.22l-.322-1.564c-.654-2.893-3.471-4.701-6.32-4.115l-5.084 1.046ZM145.615 225.978l7.262-1.494 8.517 41.396-7.263 1.495-8.516-41.397ZM185.144 217.846l8.516 41.396-7.262 1.494-15.37-22.342 5.035 24.469-7.207 1.482-8.517-41.396 7.263-1.494 15.369 22.343-5.034-24.469 7.207-1.483ZM219.77 229.006l2.356 11.453c1.402 6.815-3.035 13.551-9.906 14.965-6.816 1.402-13.552-3.035-14.954-9.851l-3.402-16.536c-1.414-6.871 3.024-13.607 9.839-15.009 6.872-1.414 13.607 3.023 15.021 9.895l-7.207 1.482c-.642-2.837-3.515-4.634-6.308-4.059-2.849.586-4.69 3.527-4.138 6.209l3.402 16.536c.63 2.781 3.515 4.634 6.252 4.07 2.894-.653 4.769-3.426 4.194-6.22l-.862-4.189-5.251 1.08-1.494-7.263 12.458-2.563ZM227.901 255.75l30.726-6.322 1.138 5.531-30.726 6.321-1.138-5.53ZM253.253 203.834l7.263-1.494 8.516 41.396-7.262 1.494-8.517-41.396ZM291.763 203.481l-8.771 1.804 7.022 34.134-7.262 1.494-7.023-34.133-8.771 1.804-1.494-7.262 24.805-5.103 1.494 7.262Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m91.477 281.651-9.064-44.056 13.676-2.814c7.606-1.564 15.06 3.346 16.625 10.952.67 3.255.1 6.325-1.423 8.863 2.406 1.765 4.145 4.364 4.825 7.673 1.554 7.554-3.361 15.005-10.963 16.569l-13.676 2.813Zm19.051-25.931a11.46 11.46 0 0 0-1.142-.743c.28-.36.537-.735.768-1.125 1.328-2.238 1.827-4.943 1.23-7.846-1.414-6.871-8.149-11.308-15.02-9.895l-12.347 2.54 8.516 41.397 12.347-2.54c6.871-1.414 11.308-8.15 9.906-14.965-.608-2.956-2.141-5.255-4.258-6.823Zm-15.684-.954-2.126-10.335 5.14-1.057c2.848-.586 5.677 1.277 6.264 4.127.574 2.793-1.345 5.633-4.138 6.208l-5.14 1.057Zm-.523-9.278 1.58 7.675 3.809-.784c2.077-.427 3.501-2.565 3.081-4.605-.435-2.114-2.546-3.505-4.66-3.07l-3.81.784Zm4.981 24.211 3.81-.784c2.077-.427 3.501-2.565 3.081-4.605-.425-2.068-2.555-3.503-4.66-3.07l-3.81.784 1.58 7.675Zm4.083.546c2.794-.575 4.713-3.415 4.139-6.208-.575-2.794-3.416-4.713-6.265-4.127l-5.14 1.057 2.127 10.336 5.139-1.058Zm36.351.091-9.683-13.671-2.961.609 3.091 15.028-7.262 1.494-8.516-41.396 12.346-2.54c6.927-1.425 13.663 3.012 15.077 9.883l.321 1.564c.989 4.805-.942 9.569-4.607 12.42l10.518 14.897-8.324 1.712Zm-.372-16.383c3.407-3.203 5.12-8.039 4.116-12.919l-.322-1.564c-1.566-7.61-9.023-12.516-16.681-10.94l-13.676 2.813 9.064 44.057 9.922-2.042-3.091-15.027.761-.157 9.684 13.671 11.226-2.309-11.003-15.583Zm-13.755-3.886-2.448-11.899 5.084-1.046c2.849-.586 5.667 1.222 6.32 4.115l.322 1.565c.563 2.737-1.356 5.578-4.194 6.22l-5.084 1.045Zm4.796-2.373c2.162-.496 3.555-2.661 3.152-4.619l-.319-1.55c-.497-2.171-2.604-3.508-4.719-3.073l-3.754.773 1.901 9.239 3.739-.77Zm13.607-22.772 9.923-2.041 9.064 44.056-9.923 2.042-9.064-44.057Zm42.189-8.679 9.064 44.056-9.475 1.949-12.079-17.56 3.957 19.231-9.867 2.03-9.064-44.056 9.475-1.949 12.079 17.56-3.957-19.232 9.867-2.029Zm-3.229 27.555-15.369-22.343-7.262 1.494 8.516 41.396 7.207-1.482-5.034-24.469 15.369 22.343 7.262-1.495-8.516-41.396-7.207 1.483 5.034 24.469Zm37.856-16.395 2.629 12.782c1.555 7.555-3.36 15.005-10.963 16.569-7.55 1.554-15.004-3.357-16.557-10.907l-3.402-16.536c-1.564-7.602 3.342-15.059 10.896-16.613 7.606-1.565 15.06 3.345 16.624 10.951l.274 1.33-9.841 2.025-.294-1.299c-.476-2.104-2.629-3.457-4.71-3.028-2.106.433-3.484 2.648-3.082 4.604l3.399 16.522c.473 2.056 2.64 3.435 4.639 3.031 2.217-.507 3.565-2.605 3.151-4.619l-.589-2.859-5.251 1.08-2.042-9.923 15.119-3.11Zm-6.769 10.349.862 4.19c.574 2.793-1.301 5.566-4.194 6.22-2.738.563-5.623-1.289-6.253-4.071l-3.402-16.536c-.552-2.682 1.289-5.622 4.138-6.209 2.793-.574 5.667 1.222 6.309 4.06l7.206-1.483a12.634 12.634 0 0 0-.344-1.316c-1.951-6.111-8.254-9.9-14.677-8.579-6.815 1.402-11.252 8.138-9.839 15.01l3.402 16.536c1.402 6.815 8.138 11.252 14.954 9.85 6.871-1.413 11.308-8.149 9.906-14.965l-2.356-11.452-12.458 2.563 1.494 7.262 5.252-1.08Zm12.24 16.942 33.386-6.869 1.685 8.191-33.386 6.868-1.685-8.19Zm25.352-51.916 9.923-2.042 9.063 44.057-9.922 2.041-9.064-44.056Zm41.717 1.76-8.771 1.804 7.022 34.134-9.923 2.041-7.022-34.133-8.771 1.804-2.041-9.923 27.464-5.65 2.042 9.923Zm-17.637 2.242 7.022 34.134 7.262-1.495-7.022-34.133 8.771-1.805-1.494-7.262-24.804 5.103 1.494 7.262 8.771-1.804Zm-130.115 19.199 8.516 41.396 7.263-1.494-8.517-41.396-7.262 1.494Zm82.287 29.771 1.137 5.531 30.726-6.322-1.138-5.53-30.725 6.321Zm25.352-51.916 8.516 41.396 7.263-1.494-8.517-41.396-7.262 1.494Z"
        clipRule="evenodd"
      />
      <path
        fill="#ECA400"
        d="M323.363 198.213v-4.282h21.434v4.282h-21.434Zm23.266-2.141c0-1.68 1.634-3.064 3.665-3.064 2.032 0 3.706 1.384 3.706 3.064 0 1.68-1.674 3.063-3.307 3.063-2.43 0-4.064-1.383-4.064-3.063ZM323.363 179.832v-4.283h21.434v4.283h-21.434Zm23.266-2.142c0-1.68 1.634-3.063 3.665-3.063 2.032 0 3.706 1.383 3.706 3.063 0 1.68-1.674 3.064-3.307 3.064-2.43 0-4.064-1.384-4.064-3.064ZM323.363 163.184v-5.71h21.434v5.71h-21.434Zm23.266-2.855c0-2.24 1.634-4.085 3.665-4.085 2.032 0 3.706 1.845 3.706 4.085s-1.674 4.085-3.307 4.085c-2.43 0-4.064-1.845-4.064-4.085ZM309.834 244.804l1.625-4.763 19.709 6.727-1.626 4.762-19.708-6.726Zm22.206 4.92c.638-1.868 2.665-2.894 4.533-2.257 1.868.638 2.882 2.702 2.244 4.57-.637 1.868-2.701 2.882-4.203 2.369-2.235-.763-3.211-2.814-2.574-4.682ZM315.563 228.014l1.626-4.763 19.708 6.727-1.625 4.762-19.709-6.726Zm22.207 4.92c.637-1.868 2.664-2.894 4.533-2.257a3.619 3.619 0 0 1 2.244 4.57c-.638 1.868-2.702 2.882-4.203 2.369-2.235-.763-3.212-2.814-2.574-4.682ZM321.297 211.224l1.626-4.762 19.708 6.726-1.625 4.762-19.709-6.726Zm22.207 4.92c.637-1.868 2.664-2.894 4.532-2.257a3.619 3.619 0 0 1 2.245 4.57c-.638 1.868-2.702 2.882-4.204 2.369-2.234-.763-3.211-2.814-2.573-4.682ZM280.884 284.195l3.092-3.969 16.43 12.796-3.093 3.97-16.429-12.797Zm19.38 11.906c1.213-1.557 3.464-1.865 5.022-.652a3.618 3.618 0 0 1 .628 5.052c-1.213 1.558-3.495 1.841-4.747.866-1.863-1.451-2.116-3.709-.903-5.266ZM291.788 270.199l3.092-3.969 16.429 12.796-3.092 3.97-16.429-12.797Zm19.38 11.906c1.213-1.557 3.464-1.865 5.021-.652a3.617 3.617 0 0 1 .628 5.052c-1.213 1.558-3.494 1.841-4.746.866-1.863-1.451-2.116-3.709-.903-5.266ZM302.687 256.203l3.093-3.97 16.429 12.796-3.092 3.97-16.43-12.796Zm19.38 11.905c1.213-1.557 3.464-1.864 5.022-.651a3.618 3.618 0 0 1 .628 5.052c-1.213 1.557-3.495 1.841-4.747.865-1.863-1.45-2.116-3.708-.903-5.266ZM240.868 312.069l4.206-2.763 11.435 17.404-4.205 2.763-11.436-17.404Zm14.516 17.511c1.65-1.084 3.88-.651 4.964.999a3.618 3.618 0 0 1-1.031 4.985c-1.65 1.084-3.902.618-4.773-.708-1.297-1.973-.81-4.192.84-5.276ZM255.695 302.327l4.206-2.763 11.435 17.404-4.205 2.763-11.436-17.404Zm14.516 17.511c1.65-1.084 3.88-.651 4.964.999a3.618 3.618 0 0 1-1.031 4.985c-1.65 1.084-3.902.618-4.773-.708-1.297-1.973-.809-4.192.84-5.276ZM270.521 292.585l4.205-2.763 11.435 17.403-4.205 2.764-11.435-17.404Zm14.516 17.51c1.649-1.084 3.88-.65 4.964.999a3.619 3.619 0 0 1-1.032 4.986c-1.65 1.084-3.901.618-4.773-.709-1.296-1.973-.809-4.192.841-5.276ZM193.939 325.367l4.876-1.243 5.141 20.181-4.876 1.242-5.141-20.18Zm8.019 21.284c1.913-.487 3.88.649 4.367 2.562a3.618 3.618 0 0 1-2.599 4.377c-1.913.488-3.89-.686-4.282-2.224-.583-2.288.601-4.228 2.514-4.715ZM211.133 320.988l4.877-1.242 5.141 20.18-4.877 1.242-5.141-20.18Zm8.019 21.284c1.913-.487 3.88.65 4.368 2.563a3.619 3.619 0 0 1-2.6 4.377c-1.913.487-3.89-.687-4.282-2.225-.583-2.288.601-4.227 2.514-4.715ZM228.325 316.608l4.876-1.242 5.141 20.18-4.876 1.242-5.141-20.18Zm8.019 21.285c1.913-.488 3.88.649 4.367 2.562a3.617 3.617 0 0 1-2.599 4.377c-1.913.487-3.89-.687-4.282-2.225-.583-2.288.601-4.227 2.514-4.714ZM144.665 322.554l5.014.426-1.765 20.75-5.014-.426 1.765-20.75Zm.591 22.737c1.967.167 3.452 1.886 3.285 3.853a3.618 3.618 0 0 1-3.892 3.282c-1.967-.167-3.449-1.925-3.314-3.506.2-2.353 1.954-3.796 3.921-3.629ZM162.343 324.057l5.013.426-1.764 20.75-5.014-.426 1.765-20.75Zm.591 22.737c1.967.167 3.452 1.886 3.285 3.853a3.618 3.618 0 0 1-3.892 3.282c-1.967-.167-3.449-1.925-3.315-3.506.2-2.353 1.955-3.796 3.922-3.629ZM180.02 325.561l5.014.426-1.765 20.75-5.013-.426 1.764-20.75Zm.592 22.737c1.967.167 3.452 1.886 3.285 3.853a3.619 3.619 0 0 1-3.892 3.282c-1.967-.167-3.449-1.925-3.315-3.506.2-2.353 1.955-3.796 3.922-3.629ZM99.573 304.098l4.605 2.029-8.398 19.057-4.604-2.029 8.397-19.057Zm-6.813 21.701c1.806.796 2.654 2.903 1.858 4.71a3.618 3.618 0 0 1-4.746 1.842c-1.806-.796-2.638-2.939-1.998-4.391.952-2.161 3.08-2.958 4.886-2.161ZM115.807 311.253l4.605 2.029-8.398 19.057-4.604-2.03 8.397-19.056Zm-6.813 21.7c1.806.796 2.654 2.904 1.858 4.711a3.618 3.618 0 0 1-4.746 1.842c-1.806-.796-2.638-2.939-1.998-4.391.952-2.161 3.079-2.958 4.886-2.162ZM132.043 318.407l4.604 2.029-8.397 19.056-4.605-2.029 8.398-19.056Zm-6.814 21.7c1.807.796 2.654 2.904 1.858 4.71a3.617 3.617 0 0 1-4.745 1.843c-1.807-.796-2.639-2.94-1.999-4.392.952-2.161 3.08-2.957 4.886-2.161ZM62.985 271.978l3.697 3.413-14.125 15.302-3.697-3.413 14.125-15.302ZM49.5 290.295c1.45 1.339 1.569 3.608.23 5.058a3.618 3.618 0 0 1-5.087.204c-1.45-1.339-1.543-3.637-.466-4.803 1.601-1.735 3.872-1.798 5.323-.459ZM76.02 284.012l3.697 3.413-14.125 15.302-3.698-3.413 14.125-15.302Zm-13.484 18.317c1.45 1.339 1.568 3.608.23 5.058a3.618 3.618 0 0 1-5.088.204c-1.45-1.339-1.542-3.636-.466-4.803 1.602-1.735 3.873-1.798 5.323-.459ZM89.057 296.045l3.697 3.414L78.63 314.76l-3.698-3.413 14.126-15.302Zm-13.484 18.317c1.45 1.339 1.568 3.608.23 5.059a3.618 3.618 0 0 1-5.088.203c-1.45-1.339-1.542-3.636-.466-4.802 1.602-1.735 3.873-1.799 5.324-.46ZM38.682 229.604l2.381 4.433-18.344 9.856-2.382-4.433 18.345-9.856Zm-18.723 12.915c.935 1.739.306 3.922-1.433 4.857a3.618 3.618 0 0 1-4.875-1.468c-.934-1.739-.271-3.94 1.127-4.691 2.08-1.118 4.247-.437 5.181 1.302ZM47.078 245.232l2.381 4.433-18.344 9.856-2.382-4.433 18.345-9.856Zm-18.723 12.915c.935 1.739.306 3.922-1.433 4.857a3.618 3.618 0 0 1-4.875-1.468c-.934-1.739-.271-3.94 1.127-4.691 2.08-1.118 4.247-.437 5.181 1.302ZM55.475 260.86l2.382 4.433-18.345 9.856-2.381-4.433 18.344-9.856Zm-18.722 12.915c.934 1.739.306 3.922-1.433 4.857a3.618 3.618 0 0 1-4.875-1.468c-.934-1.739-.272-3.94 1.126-4.691 2.08-1.118 4.248-.437 5.182 1.302ZM29.553 181.923l.81 4.967-20.553 3.352-.81-4.966 20.553-3.353Zm-21.905 6.122c.318 1.949-.987 3.809-2.935 4.127a3.618 3.618 0 0 1-4.132-2.974c-.318-1.948 1.025-3.814 2.59-4.07 2.331-.38 4.16.969 4.477 2.917ZM32.41 199.433l.81 4.966-20.553 3.353-.81-4.967 20.553-3.352Zm-21.905 6.122c.317 1.948-.987 3.808-2.936 4.126a3.618 3.618 0 0 1-4.132-2.973c-.318-1.948 1.025-3.815 2.591-4.07 2.33-.38 4.159.969 4.477 2.917ZM35.266 216.942l.81 4.967-20.553 3.352-.81-4.966 20.553-3.353Zm-21.905 6.123c.318 1.948-.987 3.808-2.935 4.126a3.618 3.618 0 0 1-4.133-2.974c-.317-1.948 1.025-3.814 2.592-4.07 2.33-.38 4.158.969 4.476 2.918ZM36.406 133.341l-.848 4.96-20.527-3.51.848-4.96 20.527 3.51Zm-22.706-1.33c-.332 1.946-2.17 3.281-4.117 2.948a3.618 3.618 0 0 1-2.941-4.155c.333-1.946 2.209-3.274 3.773-3.007 2.328.398 3.618 2.268 3.285 4.214ZM33.417 150.828l-.848 4.96-20.527-3.51.848-4.96 20.527 3.51Zm-22.706-1.33c-.333 1.946-2.17 3.281-4.117 2.948a3.618 3.618 0 0 1-2.941-4.155c.332-1.946 2.209-3.274 3.773-3.007 2.327.398 3.618 2.268 3.285 4.214ZM30.426 168.315l-.848 4.96-20.527-3.51.848-4.96 20.527 3.51Zm-22.706-1.33c-.333 1.946-2.171 3.281-4.117 2.948a3.618 3.618 0 0 1-2.942-4.155c.333-1.946 2.21-3.274 3.774-3.007 2.327.398 3.618 2.268 3.285 4.214ZM58.804 89.728l-2.43 4.407-18.235-10.059 2.43-4.406 18.235 10.058Zm-21.009-8.715c-.953 1.728-3.128 2.385-4.856 1.432a3.618 3.618 0 0 1-1.414-4.89c.954-1.73 3.163-2.368 4.552-1.601 2.068 1.14 2.672 3.33 1.718 5.059ZM50.235 105.263l-2.43 4.406L29.57 99.611l2.431-4.406 18.234 10.058Zm-21.008-8.715c-.954 1.728-3.129 2.385-4.857 1.431a3.618 3.618 0 0 1-1.414-4.89c.954-1.729 3.163-2.367 4.552-1.6 2.068 1.14 2.672 3.33 1.719 5.059ZM41.666 120.798l-2.43 4.406-18.234-10.059 2.43-4.406 18.234 10.059Zm-21.008-8.716c-.954 1.729-3.129 2.386-4.857 1.432a3.618 3.618 0 0 1-1.413-4.891c.953-1.728 3.162-2.366 4.551-1.6 2.068 1.141 2.672 3.331 1.719 5.059ZM93.738 56.129l-3.722 3.386L76.002 44.11l3.722-3.386 14.014 15.404ZM76.665 41.1c-1.46 1.329-3.73 1.249-5.06-.211a3.618 3.618 0 0 1 .241-5.085c1.46-1.329 3.757-1.22 4.825-.046 1.589 1.746 1.454 4.014-.006 5.342ZM80.615 68.067l-3.722 3.387L62.88 56.049l3.722-3.386 14.013 15.404ZM63.543 53.04c-1.46 1.329-3.731 1.249-5.06-.212a3.618 3.618 0 0 1 .24-5.085c1.461-1.328 3.758-1.22 4.825-.046 1.59 1.747 1.455 4.015-.006 5.343ZM67.493 80.005l-3.722 3.387-14.014-15.405 3.722-3.386 14.014 15.404ZM50.42 64.977c-1.46 1.329-3.73 1.249-5.06-.212a3.618 3.618 0 0 1 .241-5.085c1.46-1.328 3.757-1.22 4.825-.046 1.589 1.747 1.454 4.015-.006 5.343ZM137.853 35.494l-4.62 1.994-8.255-19.118 4.619-1.995 8.256 19.119Zm-11.271-19.756c-1.813.782-3.934-.03-4.717-1.842a3.619 3.619 0 0 1 1.878-4.732c1.812-.783 3.949.065 4.578 1.522.936 2.168.073 4.27-1.739 5.052ZM121.565 42.527l-4.62 1.994-8.255-19.118 4.62-1.995 8.255 19.119ZM110.294 22.77c-1.812.782-3.934-.03-4.716-1.843a3.617 3.617 0 0 1 1.877-4.731c1.813-.783 3.95.065 4.579 1.522.936 2.168.072 4.27-1.74 5.052ZM105.278 49.56l-4.619 1.994-8.256-19.118 4.62-1.995 8.255 19.119Zm-11.27-19.756c-1.813.783-3.934-.03-4.717-1.842a3.618 3.618 0 0 1 1.878-4.732c1.812-.783 3.95.065 4.578 1.522.936 2.168.073 4.27-1.74 5.052ZM185.733 30.403l-5.017.387-1.605-20.762 5.017-.388 1.605 20.763Zm-4.251-22.344c-1.968.152-3.711-1.305-3.863-3.274A3.618 3.618 0 0 1 180.93.92c1.969-.152 3.715 1.343 3.837 2.926.182 2.354-1.317 4.061-3.285 4.214ZM168.042 31.77l-5.017.388-1.605-20.763 5.018-.388 1.604 20.763Zm-4.25-22.344c-1.968.152-3.712-1.305-3.864-3.273a3.618 3.618 0 0 1 3.312-3.867c1.968-.152 3.714 1.344 3.837 2.926.182 2.354-1.317 4.062-3.285 4.214ZM150.356 33.136l-5.017.388-1.605-20.762 5.017-.388 1.605 20.762Zm-4.25-22.344c-1.968.153-3.712-1.304-3.864-3.273a3.618 3.618 0 0 1 3.312-3.866c1.968-.152 3.714 1.343 3.837 2.926.182 2.354-1.317 4.061-3.285 4.213ZM234.235 41.352l-4.867-1.28 5.294-20.14 4.867 1.28-5.294 20.14Zm3.313-22.502c-1.909-.502-3.078-2.45-2.576-4.36a3.618 3.618 0 0 1 4.397-2.566c1.909.502 3.068 2.488 2.664 4.023-.6 2.283-2.576 3.405-4.485 2.903ZM217.077 36.842l-4.867-1.28 5.294-20.14 4.867 1.28-5.294 20.14Zm3.313-22.502c-1.909-.502-3.078-2.45-2.576-4.36a3.618 3.618 0 0 1 4.397-2.566c1.909.502 3.068 2.488 2.665 4.023-.601 2.283-2.576 3.405-4.486 2.903ZM199.919 32.33l-4.867-1.278 5.295-20.14 4.866 1.278-5.294 20.14Zm3.314-22.501c-1.91-.502-3.078-2.45-2.577-4.36a3.618 3.618 0 0 1 4.397-2.566c1.909.502 3.068 2.488 2.665 4.022-.6 2.284-2.576 3.406-4.485 2.904ZM275.425 67.108l-4.185-2.794 11.563-17.32 4.185 2.795-11.563 17.32Zm10.459-20.197c-1.642-1.096-2.113-3.319-1.016-4.96a3.617 3.617 0 0 1 4.992-.996c1.642 1.096 2.092 3.351 1.21 4.67-1.311 1.965-3.544 2.382-5.186 1.286ZM260.67 57.258l-4.185-2.794 11.563-17.32 4.185 2.794-11.563 17.32Zm10.459-20.198c-1.641-1.096-2.112-3.318-1.016-4.96a3.617 3.617 0 0 1 4.992-.995c1.642 1.096 2.092 3.35 1.21 4.67-1.311 1.964-3.544 2.382-5.186 1.285ZM245.915 47.407l-4.186-2.793 11.563-17.32 4.185 2.794-11.562 17.32Zm10.458-20.197c-1.641-1.096-2.112-3.319-1.016-4.96a3.618 3.618 0 0 1 4.993-.996c1.641 1.096 2.091 3.351 1.21 4.671-1.311 1.964-3.545 2.381-5.187 1.285ZM306.576 105.46l-3.049-4.003 16.569-12.616 3.048 4.003-16.568 12.616Zm16.46-15.696c-1.196-1.57-.918-3.826.653-5.021a3.618 3.618 0 0 1 5.045.683c1.196 1.57.887 3.849-.376 4.81-1.878 1.43-4.126 1.099-5.322-.472ZM295.828 91.345l-3.048-4.003 16.568-12.616 3.048 4.003-16.568 12.616Zm16.461-15.696c-1.196-1.57-.918-3.826.652-5.022a3.618 3.618 0 0 1 5.045.684c1.196 1.57.887 3.849-.375 4.81-1.879 1.43-4.126 1.099-5.322-.472ZM285.082 77.23l-3.049-4.004 16.568-12.616 3.049 4.004-16.568 12.615Zm16.46-15.697c-1.196-1.57-.918-3.825.653-5.021a3.618 3.618 0 0 1 5.045.683c1.195 1.57.887 3.849-.376 4.81-1.878 1.43-4.126 1.099-5.322-.472ZM323.116 150.878l-1.59-4.774 19.759-6.578 1.589 4.775-19.758 6.577Zm20.653-9.527c-.624-1.873.369-3.917 2.242-4.54a3.616 3.616 0 0 1 4.552 2.278c.624 1.873-.405 3.929-1.911 4.43-2.24.746-4.259-.295-4.883-2.168ZM317.514 134.045l-1.59-4.774 19.759-6.578 1.589 4.774-19.758 6.578Zm20.653-9.527c-.624-1.873.369-3.917 2.242-4.541a3.618 3.618 0 0 1 4.552 2.279c.624 1.873-.405 3.929-1.911 4.43-2.24.746-4.26-.295-4.883-2.168ZM311.909 117.212l-1.59-4.774 19.759-6.578 1.589 4.775-19.758 6.577Zm20.653-9.527c-.624-1.873.369-3.917 2.242-4.54a3.616 3.616 0 0 1 4.552 2.278c.624 1.873-.405 3.929-1.911 4.431-2.24.745-4.26-.296-4.883-2.169Z"
      />
    </svg>
  );
}

export { Logo };
