using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Diagnostics;
using System.Text.RegularExpressions;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using FastColoredTextBoxNS;
using OpenWithSingleInstance;
using System.Runtime.InteropServices;

namespace CodeEditor
{
    public partial class Form1 : Form
    {
        private static string openFilePath = "", fastColoredTextBoxSaved = "";
        private static bool justSaved = true, onopenwith = false;
        private static DialogResult result;
        private static ContextMenu contextMenu = new ContextMenu();
        private static MenuItem menuItem;
        private static string filename = "";
        private static int lang;
        public Form1(string filePath)
        {
            InitializeComponent();
            if (filePath != null)
            {
                onopenwith = true;
                OpenFileWith(filePath);
            }
        }
        protected override void WndProc(ref Message m)
        {
            if (m.Msg == MessageHelper.WM_COPYDATA)
            {
                COPYDATASTRUCT _dataStruct = Marshal.PtrToStructure<COPYDATASTRUCT>(m.LParam);
                string _strMsg = Marshal.PtrToStringUni(_dataStruct.lpData, _dataStruct.cbData / 2);
                OpenFileWith(_strMsg);
            }
            base.WndProc(ref m);
        }
        public void OpenFileWith(string filePath)
        {
            if (!justSaved)
            {
                result = MessageBox.Show("Content will be lost! Are you sure?", "Open", MessageBoxButtons.OKCancel);
                if (result == DialogResult.OK)
                {
                    fastColoredTextBox1.OpenFile(filePath, Encoding.UTF8);
                    filename = filePath;
                    openFilePath = filePath;
                    this.Text = filePath;
                    fastColoredTextBoxSaved = fastColoredTextBox1.Text;
                    justSaved = true;
                }
            }
            else
            {
                fastColoredTextBox1.OpenFile(filePath, Encoding.UTF8);
                filename = filePath;
                openFilePath = filePath;
                this.Text = filePath;
                fastColoredTextBoxSaved = fastColoredTextBox1.Text;
                justSaved = true;
            }
        }
        private void cToolStripMenuItem_Click(object sender, EventArgs e)
        {
            fastColoredTextBox1.ClearStylesBuffer();
            fastColoredTextBox1.Range.ClearStyle(StyleIndex.All);
            fastColoredTextBox1.Language = FastColoredTextBoxNS.Language.CSharp;
            fastColoredTextBox1.OnSyntaxHighlight(new TextChangedEventArgs(fastColoredTextBox1.Range));
        }
        private void javascriptToolStripMenuItem_Click(object sender, EventArgs e)
        {
            fastColoredTextBox1.ClearStylesBuffer();
            fastColoredTextBox1.Range.ClearStyle(StyleIndex.All);
            fastColoredTextBox1.Language = FastColoredTextBoxNS.Language.JS;
            fastColoredTextBox1.OnSyntaxHighlight(new TextChangedEventArgs(fastColoredTextBox1.Range));
        }
        private void vBToolStripMenuItem_Click(object sender, EventArgs e)
        {
            fastColoredTextBox1.ClearStylesBuffer();
            fastColoredTextBox1.Range.ClearStyle(StyleIndex.All);
            fastColoredTextBox1.Language = FastColoredTextBoxNS.Language.VB;
            fastColoredTextBox1.OnSyntaxHighlight(new TextChangedEventArgs(fastColoredTextBox1.Range));
        }
        private void hTMLToolStripMenuItem_Click(object sender, EventArgs e)
        {
            fastColoredTextBox1.ClearStylesBuffer();
            fastColoredTextBox1.Range.ClearStyle(StyleIndex.All);
            fastColoredTextBox1.Language = FastColoredTextBoxNS.Language.HTML;
            fastColoredTextBox1.OnSyntaxHighlight(new TextChangedEventArgs(fastColoredTextBox1.Range));
        }
        private void xMLToolStripMenuItem_Click(object sender, EventArgs e)
        {
            fastColoredTextBox1.ClearStylesBuffer();
            fastColoredTextBox1.Range.ClearStyle(StyleIndex.All);
            fastColoredTextBox1.Language = FastColoredTextBoxNS.Language.XML;
            fastColoredTextBox1.OnSyntaxHighlight(new TextChangedEventArgs(fastColoredTextBox1.Range));
        }
        private void sQLToolStripMenuItem_Click(object sender, EventArgs e)
        {
            fastColoredTextBox1.ClearStylesBuffer();
            fastColoredTextBox1.Range.ClearStyle(StyleIndex.All);
            fastColoredTextBox1.Language = FastColoredTextBoxNS.Language.SQL;
            fastColoredTextBox1.OnSyntaxHighlight(new TextChangedEventArgs(fastColoredTextBox1.Range));
        }
        private void lUAToolStripMenuItem_Click(object sender, EventArgs e)
        {
            fastColoredTextBox1.ClearStylesBuffer();
            fastColoredTextBox1.Range.ClearStyle(StyleIndex.All);
            fastColoredTextBox1.Language = FastColoredTextBoxNS.Language.Lua;
            fastColoredTextBox1.OnSyntaxHighlight(new TextChangedEventArgs(fastColoredTextBox1.Range));
        }
        private void phpToolStripMenuItem_Click(object sender, EventArgs e)
        {
            fastColoredTextBox1.ClearStylesBuffer();
            fastColoredTextBox1.Range.ClearStyle(StyleIndex.All);
            fastColoredTextBox1.Language = FastColoredTextBoxNS.Language.PHP;
            fastColoredTextBox1.OnSyntaxHighlight(new TextChangedEventArgs(fastColoredTextBox1.Range));
        }
        private void newToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (!justSaved)
            {
                result = MessageBox.Show("Content will be lost! Are you sure?", "New", MessageBoxButtons.OKCancel);
                if (result == DialogResult.OK)
                {
                    fastColoredTextBox1.Clear();
                    this.Text = "CodeEditor";
                    openFilePath = ""; 
                    fastColoredTextBoxSaved = fastColoredTextBox1.Text;
                    justSaved = true;
                }
            }
            else
            {
                fastColoredTextBox1.Clear();
                this.Text = "CodeEditor";
                openFilePath = "";
                fastColoredTextBoxSaved = fastColoredTextBox1.Text;
                justSaved = true;
            }
        }
        private void openToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (!justSaved)
            {
                result = MessageBox.Show("Content will be lost! Are you sure?", "Open", MessageBoxButtons.OKCancel);
                if (result == DialogResult.OK)
                {
                    OpenFileDialog op = new OpenFileDialog();
                    op.Filter = "All Files(*.*)|*.*";
                    if (op.ShowDialog() == DialogResult.OK)
                    {
                        fastColoredTextBox1.OpenFile(op.FileName, Encoding.UTF8);
                        filename = op.FileName;
                        openFilePath = op.FileName;
                        this.Text = op.FileName;
                        fastColoredTextBoxSaved = fastColoredTextBox1.Text;
                        justSaved = true;
                    }
                }
            }
            else
            {
                OpenFileDialog op = new OpenFileDialog();
                op.Filter = "All Files(*.*)|*.*";
                if (op.ShowDialog() == DialogResult.OK)
                {
                    fastColoredTextBox1.OpenFile(op.FileName, Encoding.UTF8);
                    filename = op.FileName;
                    openFilePath = op.FileName;
                    this.Text = op.FileName;
                    fastColoredTextBoxSaved = fastColoredTextBox1.Text;
                    justSaved = true;
                }
            }
        }
        private void saveToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (openFilePath == null)
            {
                saveAsToolStripMenuItem_Click(sender, e);
            }
            else
            {
                fastColoredTextBox1.SaveToFile(openFilePath, Encoding.UTF8);
                fastColoredTextBoxSaved = fastColoredTextBox1.Text;
                justSaved = true;
            }
        }
        private void saveAsToolStripMenuItem_Click(object sender, EventArgs e)
        {
            SaveFileDialog sf = new SaveFileDialog();
            sf.Filter = "All Files(*.*)|*.*";
            if (sf.ShowDialog() == DialogResult.OK)
            {
                fastColoredTextBox1.SaveToFile(sf.FileName, Encoding.UTF8);
                filename = sf.FileName;
                openFilePath = sf.FileName;
                this.Text = sf.FileName;
                fastColoredTextBoxSaved = fastColoredTextBox1.Text;
                justSaved = true;
            }
        }
        private void cutToolStripMenuItem_Click(object sender, EventArgs e)
        {
            fastColoredTextBox1.Cut();
        }
        private void copyToolStripMenuItem_Click(object sender, EventArgs e)
        {
            fastColoredTextBox1.Copy();
        }
        private void pasteToolStripMenuItem_Click(object sender, EventArgs e)
        {
            fastColoredTextBox1.Paste();
        }
        private void undoToolStripMenuItem_Click(object sender, EventArgs e)
        {
            fastColoredTextBox1.Undo();
        }
        private void redoToolStripMenuItem_Click(object sender, EventArgs e)
        {
            fastColoredTextBox1.Redo();
        }
        private void fastColoredTextBox1_MouseUp(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Right)
            {
                fastColoredTextBox1.ContextMenu = contextMenu;
            }
        }
        private void changeCursor(object sender, EventArgs e)
        {
            this.Cursor = Cursors.Hand;
        }
        private void cutAction(object sender, EventArgs e)
        {
            fastColoredTextBox1.Cut();
        }
        private void copyAction(object sender, EventArgs e)
        {
            if (fastColoredTextBox1.SelectedText != "")
                Clipboard.SetText(fastColoredTextBox1.SelectedText);
        }
        private void pasteAction(object sender, EventArgs e)
        {
            if (Clipboard.ContainsText())
            {
                fastColoredTextBox1.SelectedText = Clipboard.GetText(TextDataFormat.Text).ToString();
            }
        }
        private void Form1_FormClosing(object sender, FormClosingEventArgs e)
        {
            if (!justSaved)
            {
                result = MessageBox.Show("Content will be lost! Are you sure?", "Exit", MessageBoxButtons.OKCancel);
                if (result == DialogResult.Cancel)
                    e.Cancel = true;
            }
            if (filename != "")
            {
                using (System.IO.StreamWriter createdfile = new System.IO.StreamWriter(Application.StartupPath + @"\tempsave"))
                {
                    createdfile.WriteLine(filename); 
                    createdfile.WriteLine(Convert.ToInt32(fastColoredTextBox1.Language).ToString());
                }
            }
        }
        private void fastColoredTextBox1_TextChanged(object sender, TextChangedEventArgs e)
        {
            if (fastColoredTextBoxSaved != fastColoredTextBox1.Text)
                justSaved = false;
        }
        private void Form1_Load(object sender, EventArgs e)
        {
            menuItem = new MenuItem("Cut");
            contextMenu.MenuItems.Add(menuItem);
            menuItem.Select += new EventHandler(changeCursor);
            menuItem.Click += new EventHandler(cutAction);
            menuItem = new MenuItem("Copy");
            contextMenu.MenuItems.Add(menuItem);
            menuItem.Select += new EventHandler(changeCursor);
            menuItem.Click += new EventHandler(copyAction);
            menuItem = new MenuItem("Paste");
            contextMenu.MenuItems.Add(menuItem);
            menuItem.Select += new EventHandler(changeCursor);
            menuItem.Click += new EventHandler(pasteAction);
            fastColoredTextBox1.ContextMenu = contextMenu;
        }
        private void Form1_Shown(object sender, EventArgs e)
        {
            if (!onopenwith)
            {
                if (System.IO.File.Exists(Application.StartupPath + @"\tempsave"))
                {
                    using (System.IO.StreamReader file = new System.IO.StreamReader(Application.StartupPath + @"\tempsave"))
                    {
                        filename = file.ReadLine();
                        lang = Convert.ToInt32(file.ReadLine());
                    }
                    if (filename != "")
                    {
                        fastColoredTextBox1.ClearStylesBuffer();
                        fastColoredTextBox1.Range.ClearStyle(StyleIndex.All);
                        fastColoredTextBox1.Language = (Language)lang;
                        fastColoredTextBox1.OnSyntaxHighlight(new TextChangedEventArgs(fastColoredTextBox1.Range));
                        fastColoredTextBox1.OpenFile(filename, Encoding.UTF8);
                        openFilePath = filename;
                        this.Text = filename;
                        fastColoredTextBoxSaved = fastColoredTextBox1.Text;
                        justSaved = true;
                    }
                }
            }
        }
    }
}