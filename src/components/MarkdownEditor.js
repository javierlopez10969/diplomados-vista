import React from 'react';
// Import the Markdown component
import Markdown from 'react-markdown';
import Form from 'react-bootstrap/Form';

class MarkDownComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        // Definir contenido de Markdown
        this.ContentMarkdown = `# Your markdown here \n * Deividsito \n * eskeresito \n<h1>Esto no se traducirá a HTML</h1>`;
    }
    render() {
        return (
            <div>
            

                {/* Renderizar el componente de rebajas */}
                <Markdown 
                    children={this.ContentMarkdown} 
                />
            </div>
        );
    }
}

export default MarkDownComponent;