# Deploy Script

# Give user option to select deployment type (major, minor, patch)
 
 echo "Select deployment type:"
    echo "1. Major"
    echo "2. Minor"
    echo "3. Patch"
    echo "4. Exit"
    read -p "Enter your choice: " choice
    case $choice in
        1)
            echo "Deploying Major"
            pnpm run release:major
            ;;
        2)
            echo "Deploying Minor"
            pnpm run release:minor
            ;;
        3)
            echo "Deploying Patch"
            pnpm run release:patch
            ;;
        4)
            echo "Exiting"
            exit 0
            ;;
        *)
            echo "Invalid choice"
            ;;
    esac

# Once the above operation is complete run the following commands

git checkout release/production
git merge main
git push origin release/production
git checkout main


