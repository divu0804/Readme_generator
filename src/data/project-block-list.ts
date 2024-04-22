import { Category, Block, BlockType } from '~/types'
import dedent from 'ts-dedent'

export const ProjectBlockList: Block[] = [
  {
    name: 'Title and Description',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
      # Project Title

      This project aims to [briefly describe what the project does], catering to [mention the target audience or user base]. It [highlight any key features or functionalities]. 
    `,
  },
  {
    name: 'Run Locally',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
      ## Run Locally
  
      To run this project on your local machine, follow these steps:
  
      1. Clone the project:
      \`\`\`bash
      git clone https://link-to-project
      \`\`\`
  
      2. Navigate to the project directory:
      \`\`\`bash
      cd my-project
      \`\`\`
  
      3. Install dependencies:
      \`\`\`bash
      npm install
      \`\`\`
  
      4. Start the server:
      \`\`\`bash
      npm run start
      \`\`\`
    `,
  }
  ,
  {
    name: 'API Reference',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## API Reference

    #### Get all items

    \`\`\`http
      GET /api/items
    \`\`\`

    | Parameter | Type     | Description                |
    | :-------- | :------- | :------------------------- |
    | \`api_key\` | \`string\` | **Required**. Your API key |

    #### Get item

    \`\`\`http
      GET /api/items/$\{id}
    \`\`\`

    | Parameter | Type     | Description                       |
    | :-------- | :------- | :-------------------------------- |
    | \`id\`      | \`string\` | **Required**. Id of item to fetch |

    #### add(num1, num2)

    Takes two numbers and returns the sum.

`,
  },
  {
    name: 'Running Tests',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Running Tests

    To run tests, run the following command

    \`\`\`bash
      npm run test
    \`\`\`

`,
  },
  {
    name: 'Authors',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Authors


`,
  },
  {
    name: 'Badges',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Badges
    
    Add badges from somewhere like: [shields.io](https://shields.io/)
  `,
  },
  {
    name: 'Contributing',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
      ## Contributing

      Contributions are always welcome! If you'd like to contribute to this project, please follow these guidelines:

      - Check out our [contribution guidelines](./CONTRIBUTING.md) for detailed instructions on how to contribute.
      - Take a look at our [open issues](./issues) to see if there's anything you can help with.
      - If you're unsure about something or need assistance, feel free to reach out to us on our [community forum](https://community.example.com).
      - Please adhere to our project's [code of conduct](./CODE_OF_CONDUCT.md) in all your interactions.

      Thank you for considering contributing to our project! 🚀
    `,
  },
  {
    name: 'Demo',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Demo

    Insert gif or link to demo

`,
  },
  {
    name: 'Deployment',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Deployment

    To deploy this project run

    \`\`\`bash
      npm run deploy
    \`\`\`

`,
  },
  {
    name: 'Documentation',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Documentation

    [Documentation](https://linktodocumentation)

`,
  },
  {
    name: 'Environment Variables',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Environment Variables

    To run this project, you will need to add the following environment variables to your .env file

    \`API_KEY\`

    \`ANOTHER_API_KEY\`

`,
  },
  {
    name: 'FAQ',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## FAQ

    #### Question 1

    Answer 1

    #### Question 2

    Answer 2

`,
  },
  {
    name: 'Features',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Features

    - Light/dark mode toggle
    - Live previews
    - Fullscreen mode
    - Cross platform

`,
  },
  {
    name: 'Feedback',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Feedback

    If you have any feedback, please reach out.

`,
  },
  {
    name: 'Installation',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Installation 
    
    Install my-project with npm

    \`\`\`bash
    npm install my-project
    cd my-project
    \`\`\`

`,
  },
  {
    name: 'Lessons',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Lessons Learned

    What did you learn while building this project? What challenges did you face and how did you overcome them?

`,
  },
  {
    name: 'License',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## License

    [MIT](https://choosealicense.com/licenses/mit/)

`,
  },
  {
    name: 'Logo',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

`,
  },
  {
    name: 'Optimizations',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Optimizations

    What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility

`,
  },
  {
    name: 'Related',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Related

    Here are some related projects

    [Awesome README](https://github.com/matiassingers/awesome-readme)

`,
  },
  {
    name: 'Roadmap',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Roadmap

    - Additional browser support
    - Add more integrations

`,
  },
  {
    name: 'Acknowledgements',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Acknowledgements
`,
  },
  {
    name: 'Screenshots',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Screenshots

    ![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

`,
  },
  {
    name: 'Support',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Support

    For support, email or join our Slack channel.

`,
  },
  {
    name: 'Tech Stack',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Tech Stack

    **Client:** React, Redux, TailwindCSS

    **Server:** Node, Express

`,
  },
  {
    name: 'Appendix',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Appendix

    Any additional information goes here

`,
  },
  {
    name: 'Usage/Examples',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Usage/Examples

    \`\`\`javascript
    import Component from 'my-project'

    function App() {
      return <Component />
    }
    \`\`\`

`,
  },
  {
    name: 'Used By',
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Used By

    This project is used by the following companies:

    - Company 1
    - Company 2

`,
  },
]
