import PropTypes from "prop-types";
import parse from 'html-react-parser';
import sanitizeHtml from 'sanitize-html';

function Html(props) {
    const html = props.allowedTags ? sanitizeHtml(props.html, {
        allowedTags: props.allowedTags
    }) : props.html;

    return parse(html);
}

Html.defaultProps = {
    html: ""
};

Html.propTypes = {
    html: PropTypes.string.isRequired,
    allowedTags: PropTypes.any
};

export default Html;
